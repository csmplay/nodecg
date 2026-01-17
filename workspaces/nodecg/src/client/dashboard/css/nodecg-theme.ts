const $documentContainer = document.createElement("template");

$documentContainer.innerHTML = `<dom-module id="nodecg-theme">
	<template>
		<style>
			:host,
			html {
				color: #e4e4e7;

				--nodecg-brand-blue: #22d3ee;
				--nodecg-brand-blue-dark: #0e7490;
				--default-primary-color: var(--nodecg-brand-blue);
				--primary-color: var(--nodecg-brand-blue);

				/* Modern dark theme surface colors */
				--nodecg-surface-0: #09090b;
				--nodecg-surface-1: #18181b;
				--nodecg-surface-2: #27272a;
				--nodecg-surface-3: #3f3f46;
				--nodecg-border-color: #3f3f46;

				--nodecg-accept-color: #22c55e;
				--nodecg-benign-color: #3f3f46;
				--nodecg-configure-color: #8b5cf6;
				--nodecg-danger-color: #f97316;
				--nodecg-disabled-color: #52525b;
				--nodecg-execute-color: #eab308;
				--nodecg-reject-color: #ef4444;
				--nodecg-selected-color: #3b82f6;

				--paper-toggle-button-checked-bar-color: var(--nodecg-brand-blue-dark);
				--paper-toggle-button-checked-button-color: var(--nodecg-brand-blue);
				--paper-toggle-button-checked-ink-color: var(--nodecg-brand-blue);
				--paper-toggle-button-label-color: #e4e4e7;
				--paper-toggle-button-unchecked-bar-color: var(--nodecg-surface-2);
				--paper-toggle-button-unchecked-button-color: #71717a;

				--paper-dialog-color: #e4e4e7;

				--paper-input-container-color: #a1a1aa;
				--paper-input-container-focus-color: var(--nodecg-brand-blue);
				--paper-input-container-input-color: #e4e4e7;
				--paper-slider-active-color: var(--nodecg-brand-blue);
				--paper-slider-knob-color: var(--nodecg-brand-blue);

				--paper-input-container: {
					--paper-input-container-color: #a1a1aa;
					--paper-input-container-focus-color: var(--nodecg-brand-blue);
					--paper-input-container-input-color: #e4e4e7;
				};

				--paper-input-suffix: {
					color: var(--nodecg-brand-blue);
				};

				--paper-dropdown-menu-icon: {
					color: var(--nodecg-brand-blue);
				};
			}

			vaadin-combo-box {
				--iron-icon-fill-color: var(--nodecg-brand-blue);
				--paper-input-suffix: {
					height: 24px;
					transform: translateY(-2px);
				};
			}

			vaadin-upload {
				--vaadin-upload-file-status-icon-complete: {
					color: var(--nodecg-brand-blue);
				};
				--vaadin-upload-file-name: {
					color: white;
				};
			}

			paper-button {
				background: var(--nodecg-background-color);
				border-radius: 6px;
				color: var(--nodecg-foreground-color, #e4e4e7);
				font-size: 14px;
				font-weight: 500;
				transition: all 0.15s ease;
			}

			paper-button:hover {
				filter: brightness(1.1);
			}

			paper-button.nodecg-accept {
				--nodecg-background-color: var(--nodecg-accept-color);
			}

			paper-button.nodecg-benign {
				--nodecg-background-color: var(--nodecg-benign-color);
			}

			paper-button.nodecg-configure {
				--nodecg-background-color: var(--nodecg-configure-color);
			}

			paper-button.nodecg-danger {
				--nodecg-background-color: var(--nodecg-danger-color);
			}

			paper-button.nodecg-execute {
				--nodecg-background-color: var(--nodecg-execute-color);
				--nodecg-foreground-color: black;
			}

			paper-button.nodecg-reject {
				--nodecg-background-color: var(--nodecg-reject-color);
			}

			paper-button.nodecg-selected {
				--nodecg-background-color: var(--nodecg-selected-color);
			}

			paper-button[disabled] {
				--nodecg-background-color: var(--nodecg-disabled-color);
				color: #54575C;
			}


			paper-card {
				--paper-card-header-color: #e4e4e7;
				background-color: var(--nodecg-surface-1);
				width: 100%;
				border-radius: 12px;
				overflow: hidden;
				border: 1px solid var(--nodecg-border-color);
			}

			paper-card[heading] {
				--paper-card-header: {
					background-color: var(--nodecg-surface-2);
					border-bottom: 3px solid var(--nodecg-brand-blue);
					font-weight: 600;
				};
			}

			.card-content > * {
				padding: 0 16px;
			}

			paper-dialog,
			paper-dialog-scrollable {
				background-color: var(--nodecg-surface-1);
				color: #e4e4e7;
				border-radius: 12px;
				border: 1px solid var(--nodecg-border-color);
			}

			a {
				color: var(--nodecg-brand-blue);
				font-weight: 500;
				letter-spacing: 0.018em;
				text-decoration: none;
				transition: color 0.15s ease;
			}

			a:hover {
				color: #67e8f9;
				text-decoration: underline;
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($documentContainer.content);

export {};
