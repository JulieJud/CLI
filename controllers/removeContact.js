const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.join(__dirname, "../db/contacts.json");

const listContacts = require("./listContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.filter((item) => item.id !== Number(contactId));
  await fs.writeFile(contactsPath, JSON.stringify(contact, null));
  console.table(contact);
  return contact;
};

module.exports = removeContact;
