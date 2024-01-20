<script>
	import SiteThumbnail from '$lib/components/SiteThumbnail.svelte'
	import Spinner from '$lib/ui/Spinner.svelte'
	import TextField from '$lib/ui/TextField.svelte'
	import PrimaryButton from '$lib/ui/PrimaryButton.svelte'
	import { validate_site_structure_v2 } from 'builder'
	import Icon from '@iconify/svelte'
	import { buildStaticPage } from 'builder'

	export let site
	export let template
	let newTemplate = false

	if (template === undefined) {
		newTemplate = true

		template = {
			"id": 1,
			"site_id": "",
			"name": "",
			"repo": "",
			"price": 0,
			"price_id": null,
			"available": true,
			"description": {
				"html": "",
				"markdown": ""
			},
			"preview_url": "",
			"screenshots": {
				"mobile": {
					"alt": "",
					"src": "",
					"url": "",
					"size": 0
				},
				"tablet": {
					"alt": "",
					"src": "",
					"url": "",
					"size": 0
				},
				"desktop": {
					"alt": "",
					"src": "",
					"url": "",
					"size": 0
				}
			},
			"template_id": null,
			"created_at": null,
			"updated_at": null
		}
	}


	let loading = false
	let finishing = false
	let message = ''
	$: canUpsertTemplate = template.name && template.repo


	async function toggleTemplate() {
		console.log('toggleTemplate', template.name, template.repo, site)
	}

	function validateText(event) {
		console.log('validateText', event.target.value)
		return true
	}

</script>

<main class="primo-reset primo-modal">
	{#if !finishing}
		<h1 class="primo-heading-xl">Set Template</h1>
		<form on:submit|preventDefault={toggleTemplate()}>
			<div class="name-url">
				<TextField
					autofocus={true}
					label="Name"
					on:input={validateText}
					bind:value={template.name}
				/>
				<TextField
					label="Repo"
					bind:value={template.repo}
					on:input={validateText}
				/>
				<TextField
					label="Description HTML"
					bind:value={template.description.html}
					on:input={validateText}
				/>
				<TextField
					label="Description Markdown"
					bind:value={template.description.markdown}
					on:input={validateText}
				/>
				<div class="container">
					<input
						type="checkbox"
						id="template-active"
						bind:checked={template.active}
					/>
					<label for="template-active">
						<span>Active</span>
					</label>
				</div>
				<span>{message}</span>
			</div>
			<TextField
				label="Preview URL"
				bind:value={template.preview_url}
				on:input={validateText}
			/>
			<div>
				<TextField
						label="Screenshot Desktop Source"
						bind:value={template.screenshots.desktop.src}
						on:input={validateText}
				/>
				<TextField
						label="Screenshot Desktop URL"
						bind:value={template.screenshots.desktop.url}
						on:input={validateText}
				/>
				<TextField
						label="Screenshot Desktop Alt"
						bind:value={template.screenshots.desktop.alt}
						on:input={validateText}
				/>
			</div>
			<!--{#if duplicatingSite && primo_json_valid}-->
			<!--	<div class="site-thumbnail">-->
			<!--		<SiteThumbnail {preview} />-->
			<!--	</div>-->
			<!--{:else if duplicatingSite && !primo_json_valid}-->
			<!--	<div class="error">-->
			<!--		<p>Invalid Primo site file</p>-->
			<!--	</div>-->
			<!--{:else}-->
			<!--	<Themes on:select={({ detail }) => (selected_theme = detail)} />-->
			<!--{/if}-->
			<footer>
			</footer>
			<div class="submit">
				<PrimaryButton
					type="submit"
					label={newTemplate ? 'CreateTemplate' : 'Update Template'}
					disabled={!canUpsertTemplate}
					{loading}
				/>
			</div>
		</form>
	{:else}
		<div class="creating-site">
			<span>{newTemplate ? 'Creating' : 'Updating'} {template.name}</span>
			{#key message}
				<p>{message}</p>
			{/key}
			<Spinner />
		</div>
	{/if}
</main>

<style lang="postcss">
	.primo-modal {
		max-width: var(--primo-max-width-1);

		form {
			.name-url {
				margin-bottom: 1.5rem;
				margin-top: 0.5rem;
			}

			.submit {
				--color-link: var(--color-primored);
			}
		}
	}
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.container {
			margin-bottom: 1rem;
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}
		span {
			color: var(--color-gray-3);
			font-size: 0.75rem;
			text-decoration: underline;
		}
	}
	#upload-json {
		margin-bottom: 0.5rem;
		display: flex;
		justify-content: flex-start;

		label {
			cursor: pointer;

			input {
				display: none;
			}

			span {
				color: var(--color-gray-3);
				font-size: 0.75rem;
				text-decoration: underline;
			}
		}
	}

	.site-thumbnail {
		margin: 1rem 0;
		border-radius: 0.25rem;
		overflow: hidden;
		border: 1px solid var(--color-gray-8);
	}

	.error {
		padding: 1rem;
		background: #b00020;
		margin-bottom: 1rem;
	}

	.creating-site {
		display: flex;
		align-items: center;

		& > * {
			margin: 0 1rem;
		}
	}
</style>
