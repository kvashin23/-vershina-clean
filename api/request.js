// Vercel serverless-функция: /api/request
// Принимает заявку с сайта и пересылает её вам в Telegram.
// Никакой базы данных не требуется — история заявок хранится прямо в чате с ботом.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }

  const { name, phone, route, date, people, comment } = req.body || {};

  if (!name || !phone) {
    res.status(400).json({ error: 'name и phone обязательны' });
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы в переменных окружения Vercel');
    res.status(500).json({ error: 'server not configured' });
    return;
  }

  const text = [
    '🔔 Новая заявка с сайта «Вершина»',
    `Имя: ${String(name).slice(0, 200)}`,
    `Телефон: ${String(phone).slice(0, 50)}`,
    route ? `Маршрут: ${String(route).slice(0, 300)}` : null,
    date ? `Дата: ${String(date).slice(0, 20)}` : null,
    people ? `Человек: ${String(people).slice(0, 10)}` : null,
    comment ? `Комментарий: ${String(comment).slice(0, 2000)}` : null,
  ].filter(Boolean).join('\n');

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error('Telegram API error:', errText);
      res.status(502).json({ error: 'telegram send failed' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Ошибка при отправке в Telegram:', err);
    res.status(502).json({ error: 'telegram send failed' });
  }
};
