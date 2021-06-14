const getDate = (reminder) => {
  const formatedReminder = reminder.split('T');
  return formatedReminder[0];
};

const getTime = (reminder) => {
  const formatedReminder = reminder.split('T');
  return formatedReminder[1];
};

const getTodayReminder = (reminder) => {
  const reminderDate = new Date(reminder).getDate();
  const todayDate = new Date().getDate();

  if (reminderDate === todayDate) {
    return true;
  }
  return false;
};

export { getDate, getTime, getTodayReminder };
