export default class UsersService {

  constructor(db) {
    this.db = db;
  }

  async listUsers() {
    const keys = await this.db.list();
    return keys;
  }
}