const sdkOpts = {
  network: 'testnet',
};
const sdk = new DashJS.SDK(sdkOpts);

async function connect() {
  try {
    await sdk.isReady();
    console.log('connected');
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    sdk.disconnect();
  }
}

connect();