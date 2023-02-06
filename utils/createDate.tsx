export const createDate = () => {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes()
  }
}