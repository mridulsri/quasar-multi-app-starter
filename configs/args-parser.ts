const options: Record<string, string> = {};

// Function to parse command line arguments and return key-value pairs
// Example: --app=client
// This will populate options with { app: 'client' }
const parseCmdArguments = (): Record<string, string> | undefined => {
  const args = process.argv.slice(2); // Handling Key-Value Pairs
  args.forEach((arg) => {
    if (arg.startsWith('--')) {
      const parts = arg.substring(2).split('=');
      if (parts.length === 2 && parts[0] && parts[1]) {
        options[parts[0]] = parts[1];
      }
    }
  });

  return Object.keys(options).length > 0 ? options : undefined;
};

export const resolveCmdArgument = (name: string): string => {
  if (!options || !Object.keys(options).length) {
    parseCmdArguments();
  }
  const targetApp = options[name];
  if (!targetApp) {
    console.warn('⚠️ No app specified in command line arguments. Using "client" as default.');
  }
  return options[name] || 'client'; // Default to 'client' if no appId or command line argument (--app) is provided
};
