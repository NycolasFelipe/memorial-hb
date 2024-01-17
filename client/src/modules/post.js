export class Post {
  #id;
  #title = "Título";
  #location = "Localização";
  #date;
  #description = "Descrição";

  constructor(title, location, description) {
    this.#title = title;
    this.#location = location;
    this.#description = description;
    this.#setDate();
    this.#setId();
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  get location() {
    return this.#location;
  }

  set location(newLocation) {
    this.#location = newLocation;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  get date() {
    return this.#date;
  }

  #setDate() {
    let date = new Date();
    let dateTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let dateOptions = { timeStyle: 'short', dateStyle: 'medium', timeZone: dateTimeZone };
    date = new Intl.DateTimeFormat('pt-BR', dateOptions).format(date);
    this.#date = date;
  }

  #setId() {
    this.#id = "post-" + new Date().valueOf();
  }
}