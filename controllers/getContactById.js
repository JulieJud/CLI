const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id === Number(id));
  if (!contact) {
    return null;
  }
  console.table(contacts);
  return contact;
};

module.exports = getContactById;
