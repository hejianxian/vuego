import $dialog from './dialog';

export default function ({ title, message, button = { text: '取消' } }) {
  return $dialog.create({
    title,
    message,
    buttons: [button],
  });
}
