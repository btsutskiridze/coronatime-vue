class JWT {
  static decode(token) {
    try {
      const parts = token.split(".");
      const header = JSON.parse(atob(parts[0]));
      const payload = JSON.parse(atob(parts[1]));
      const decoded = { header, payload };
      return decoded;
    } catch (e) {
      return null;
    }
  }
}

export default JWT;
