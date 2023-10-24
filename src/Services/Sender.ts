const Sender = <T>(url: string, type: string, body?: object): Promise<T> =>
  fetch(url, {
    method: type,
    body: JSON.stringify(body),
  }).then((res) => res.json() as T)

export default Sender
