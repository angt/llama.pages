import { expect, test } from '@playwright/test';

test('home page loads with expected content', async ({ page }) => {
	await page.goto('http://localhost:4173/');

	await expect(page.getByRole('heading', { level: 1 })).toHaveText(
		'Install llama.cpp on your system'
	);
	await expect(page.getByText('curl -fsSL https://installama.sh | bash')).toBeVisible();

	const githubLink = page.getByRole('link', { name: 'download from GitHub' });
	await expect(githubLink).toBeVisible();
	await expect(githubLink).toHaveAttribute(
		'href',
		'https://github.com/ggml-org/llama.cpp/releases'
	);
});
