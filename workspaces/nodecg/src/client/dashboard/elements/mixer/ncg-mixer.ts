import "./ncg-sounds";

import * as Polymer from "@polymer/polymer";

class NcgMixer extends Polymer.PolymerElement {
	static get template() {
		return Polymer.html`
		<style include="nodecg-theme">
			:host {
				white-space: nowrap;
				width: 100%;
				max-width: 600px;
				@apply --layout-vertical;
				@apply --layout-stretch;
			}

			#mixer-masterCard {
				background-color: var(--nodecg-surface-2);
				border-bottom: 3px solid var(--nodecg-brand-blue);
				margin-bottom: 16px;
				border-radius: 12px;
				overflow: hidden;
				border: 1px solid var(--nodecg-border-color);
			}

			#mixer-masterCard .card-content {
				@apply --layout-horizontal;
				align-items: center;
			}

			#mixer-masterCard span {
				@apply --paper-font-title;
				font-size: 28px;
				font-weight: 600;
				flex-grow: 1;
				flex-shrink: 0;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			#masterFader {
				background-color: var(--nodecg-surface-2);
				color: #e4e4e7;
				flex-shrink: 1;
				width: 250px;
				--paper-slider-input: {
					width: 80px;
				};
			}

			paper-card {
				margin-bottom: 12px;
			}
		</style>

		<paper-card id="mixer-masterCard">
			<div class="card-content">
				<span>Master Fader</span>
				<paper-slider id="masterFader" min="0" max="100" step="1" editable=""></paper-slider>
			</div>
		</paper-card>

		<template is="dom-repeat" items="[[bundlesWithSounds]]" as="bundle">
			<ncg-sounds bundle-name="[[bundle.name]]">
			</ncg-sounds>
		</template>
`;
	}

	static get is() {
		return "ncg-mixer";
	}

	static get properties() {
		return {
			bundlesWithSounds: {
				type: Array,
				value: window.__renderData__.bundles.filter(
					(bundle) => bundle.soundCues && bundle.soundCues.length > 0,
				),
			},
		};
	}

	override ready(): void {
		super.ready();

		const { masterFader } = this.$;
		const masterVolume = NodeCG.Replicant("volume:master", "_sounds");

		masterFader.addEventListener("change", (e: any) => {
			masterVolume.value = e.target.value;
		});

		masterVolume.on("change", (newVal) => {
			masterFader.value = newVal;
		});
	}
}

customElements.define("ncg-mixer", NcgMixer);
