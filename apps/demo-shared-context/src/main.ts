(async function main(){
  const sharedPlatform = await import('shared-platform');
  const platform = sharedPlatform.getSharedPlatform()


  const app = await import('./app');
  const app2 = await import('./app2');

  app.bootstrap(platform);
  app2.bootstrap(platform);
})()




