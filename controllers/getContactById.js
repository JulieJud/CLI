const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.filter((item) => item.id === Number(contactId));
  if (!contact) {
    return null;
  }
  console.table(contacts);
  return contact;
};

module.exports = getContactById;
