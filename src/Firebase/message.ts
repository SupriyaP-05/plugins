import { sendNotificationToClient } from './notify';

export const addMessage = async (req: { body: { name: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { messages: any; }): void; new(): any; }; }; }) => {
  const { name, message } = req.body;
  const columns = 'name, message';
  const values = `'${name}', '${message}'`;
  try {
    // const data = await messagesModel.insertWithReturn(columns, values);
    const data = {
        rows: 0
    }
    const tokens: never[] = [];
    const notificationData = {
      title: 'New message',
      body: message,
    };
    sendNotificationToClient(tokens, notificationData);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err });
  }
};