const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.filter((item) => item.id === Number(contactId));
  if (!contact) {
    return;
  }
  console.table(contacts);
  return contact;
};

module.exports = getContactById;
