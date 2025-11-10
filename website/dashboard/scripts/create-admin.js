/**
 * Alternative script to create/reset admin user using Strapi's bootstrap
 * This script can be run when Strapi is running
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== Strapi Admin User Creator ===\n');

rl.question('Enter admin email: ', (email) => {
  if (!email || !email.includes('@')) {
    console.error('Invalid email address');
    rl.close();
    process.exit(1);
  }

  rl.question('Enter admin password (min 6 characters): ', (password) => {
    if (!password || password.length < 6) {
      console.error('Password must be at least 6 characters');
      rl.close();
      process.exit(1);
    }

    rl.question('Enter first name (optional): ', (firstname) => {
      rl.question('Enter last name (optional): ', (lastname) => {
        console.log('\nTo create this admin user, run:');
        console.log(`npx strapi admin:create-user --email "${email}" --password "${password}" --firstname "${firstname || 'Admin'}" --lastname "${lastname || 'User'}"`);
        console.log('\nOr use the Strapi CLI:');
        console.log('npm run develop');
        console.log('Then go to http://localhost:1337/admin and create an admin user');
        
        rl.close();
      });
    });
  });
});

