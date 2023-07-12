import { execSync } from 'node:child_process';
try {
    execSync('npm i vite-plugin-vue-svg-icons --save-dev', {
        stdio: 'inherit',
    });
} catch (error) {
    console.error('Error occurred while installing vite-plugin-vue-svg-icons:', error);
    process.exit(1);
}
