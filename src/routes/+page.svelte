<script>
	import { Copy, Check } from "@lucide/svelte";
	import { toast } from "svelte-sonner";

	let copied = $state(false);

	async function handleCopy() {
		navigator.clipboard.writeText('curl -fsSL https://installama.sh | bash');
		toast.success("Copied to clipboard!");
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<main class="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
    <h1 class="text-2xl mb-4 tracking-tight text-foreground">Install <strong class="font-semibold">llama.cpp</strong> on your system</h1>
    
    <div class="w-full max-w-2xl rounded-lg border border-foreground/10 bg-foreground/2 shadow-md p-1 shadow-sm">
        <div class="flex items-center justify-between gap-4 p-4">
            <code class="text-sm font-mono text-foreground">curl -fsSL https://installama.sh | bash</code>

            <button
                class="cursor-pointer"
				aria-label={copied ? 'Copied command' : 'Copy command'}
                onclick={handleCopy}
            >
                {#if copied}
					<Check class="size-4" />
				{:else}
					<Copy class="size-4" />
				{/if}
            </button>
        </div>
    </div>

    <span class="text-muted-foreground">
        paste this in your terminal or <a href="https://github.com/ggml-org/llama.cpp/releases" target="_blank" class="font-medium underline">download from GitHub</a>
    </span>
</main>