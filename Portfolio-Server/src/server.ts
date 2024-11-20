import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
// import { seed } from './app/utils/seeding';

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    // await seed();
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
