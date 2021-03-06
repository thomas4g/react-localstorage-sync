export function noop () {}

export function pick (obj, keys) {
  const newObj = {};
  keys.forEach((key) => {
    newObj[key] = obj[key];
  });
  return newObj;
}

export function getNamespace(WrapperComponent, WrapperComponentInstance) {
  if (typeof WrapperComponent.localStorageNamespace === 'string') {
    return WrapperComponent.localStorageNamespace;
  } else if (typeof WrapperComponent.localStorageNamespace === 'function') {
    return WrapperComponent.localStorageNamespace(WrapperComponentInstance.props, WrapperComponentInstance.state);
  }

  console.error('Namespace is missing for the wrapped component. Make sure your component has localStorageNamespace present.');
}
