import $dialog from './dialog';

export default function ({ title, message, buttons = [{ text: 'Cancel' }, { text: 'OK' }] }) {
  return $dialog.create({
    title,
    message,
    buttons,
  });
}
