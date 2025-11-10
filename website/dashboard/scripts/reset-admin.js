/**
 * Script to reset Strapi admin password
 * Usage: node scripts/reset-admin.js <email> <newPassword>
 * Example: node scripts/reset-admin.js admin@example.com newpassword123
 */

const path = require('path');
const { execSync } = require('child_process');

// Get email and password from command line arguments
const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
  console.error('Usage: node scripts/reset-admin.js <email> <newPassword>');
  console.error('Example: node scripts/reset-admin.js admin@example.com newpassword123');
  process.exit(1);
}

if (password.length < 6) {
  console.error('Error: Password must be at least 6 characters long');
  process.exit(1);
}

console.log('Resetting admin password...');
console.log(`Email: ${email}`);
console.log('Password: ' + '*'.repeat(password.length));

try {
  // Use Strapi CLI to create/reset admin user
  const strapiPath = path.join(__dirname, '..');
  process.chdir(strapiPath);
  
  // Create admin user (this will update if user exists)
  execSync(
    `npx strapi admin:create-user --email "${email}" --password "${password}" --firstname Admin --lastname User`,
    { stdio: 'inherit' }
  );
  
  console.log('\n✅ Admin password reset successfully!');
  console.log(`You can now login with:`);
  console.log(`  Email: ${email}`);
  console.log(`  Password: ${password}`);
} catch (error) {
  console.error('\n❌ Error resetting password:', error.message);
  console.log('\nAlternative method:');
  console.log('1. Start Strapi: npm run develop');
  console.log('2. Go to http://localhost:1337/admin');
  console.log('3. If no admin exists, you will be prompted to create one');
  console.log('4. Or use the forgot password link if available');
  process.exit(1);
}

