type Mapping = Record<string, string | boolean | undefined>

type Argument = undefined | string | Mapping | string[];

export function classNames(...args: Argument[]): string {
  let classes = '';

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    classes = appendClass(classes, parseValue(arg));
  }

  return classes;
}

function parseValue(arg: Argument) {
  if (typeof arg === 'string') return arg;

  if (Array.isArray(arg)) {
    // eslint-disable-next-line
    return classNames.apply(null, arg);
  }

  if (typeof arg !== 'object' || arg === null) return '';

  let classes = '';
  const object = arg as Record<string, string | boolean>;

  for (const key in object) {

    if (object[key]) {
      classes = appendClass(classes, key);
    }
  }

  return classes;
}

function appendClass(value: string, newClass: string) {
  const trimNewClass = newClass.trim();

  if (!trimNewClass) {
    return value;
  }

  return value ? (value + ' ' + newClass) : newClass;
}