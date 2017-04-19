import $dialog from './dialog';

export default function (title, message) {
  return $dialog.create({
    title,
    message,
    buttons: [{
      text: 'Cancel',
      action() {
        console.log('Cancel');
      },
    }, {
      text: 'OK',
      action() {
        console.log('OK');
      },
    }],
  });
}
