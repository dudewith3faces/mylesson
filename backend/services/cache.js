class Cache {
  static #data = [];

  static add(data) {
    this.#data = data;
  }

  static query(q) {
    const res = [];
    for (let i = 0; i < this.#data.length; i++) {
      const element = this.#data[i];
      if (
        element.title.toLowerCase().includes(q) ||
        element.plot.toLowerCase().includes(q) ||
        element.director.toLowerCase().includes(q)
      )
        res.push(element);
    }

    return res;
  }

  static isCacheEmpty() {
    return this.#data.length === 0;
  }
}

module.exports = { Cache };
