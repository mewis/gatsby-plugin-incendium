
export const onRouteUpdate = () => {
  if (typeof window.inc == "function") {
    window.inc("run")
  }
}