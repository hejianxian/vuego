import $dialog from './dialog';

export default function (title, message) {
  return $dialog.create({
    title,
    message,
    buttons: [{
      text: 'OK',
      action() {
        console.log('Alert');
      },
    }],
  });
}
