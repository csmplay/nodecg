import * as Polymer from "@polymer/polymer";
class UiSelect extends Polymer.PolymerElement {
	static get template() {
		return Polymer.html`
        <style include="nodecg-theme">
			#label {
				color: #71717a;
				cursor: default;
				left: 12px;
				pointer-events: none;
				position: absolute;
				top: 11px;
				-moz-user-select: none;
				-ms-user-select: none;
				-webkit-user-select: none;
				user-select: none;
			}

			select {
				-moz-appearance: none;
				-webkit-appearance: none;
				appearance: none;
				background-color: var(--nodecg-surface-2);
				background-image: url('/dashboard/img/select-arrow.png');
				background-position: calc(93% + 2px) 8px;
				background-repeat: no-repeat;
				border: none;
				border-bottom: 1px solid var(--nodecg-border-color);
				border-radius: 6px;
				box-sizing: border-box;
				color: inherit;
				font-family: inherit;
				font-size: inherit;
				font-weight: inherit;
				height: 100%;
				padding: 2px 6px;
				width: 100%;
				transition: border-color 0.15s ease, outline 0.15s ease;
			}

			select:hover {
				border-color: var(--nodecg-brand-blue);
			}

			select:focus {
				outline: 2px solid var(--nodecg-brand-blue);
				outline-offset: 1px;
			}
		</style>

		<div id="label" hidden="[[value]]">[[label]]</div>
		<select id="select" title="[[label]]" name="[[name]]" required="[[required]]" value="{{value::change}}" on-change="_selectChanged">
		</select>

		<!-- Just used as an insertion point, we'll move these inserted nodes into #select in the \`attached\` callback -->
		<content></content>
`;
	}

	static get is() {
		return "ui-select";
	}

	static get properties() {
		return {
			name: String,
			required: Boolean,
			label: String,
			value: {
				type: String,
				notify: true,
			},
		};
	}

	override ready(): void {
		super.ready();
		["item", "add", "remove"].forEach((methodToForward) => {
			this[methodToForward] = this.$.select[methodToForward].bind(
				this.$.select,
			);
		});
	}

	override connectedCallback(): void {
		super.connectedCallback();

		if (this.label) {
			const labelOption = document.createElement("option");
			labelOption.label = `-- Select a ${this.label} --`;
			labelOption.value = "";
			this.$.select.add(labelOption);
		}

		// Move all Light DOM <option> elements into the local Shadow DOM.
		const options = this.querySelectorAll("option");
		options.forEach((option) => {
			this.$.select.add(option);
		});

		this.$.select.selectedIndex = -1;
	}

	_selectChanged(e: any) {
		if (!e.target.value) {
			this.$.select.selectedIndex = -1;
		}

		this.value = this.$.select.value;
		this.selectedOptions = this.$.select.selectedOptions;
		this.dispatchEvent(
			new CustomEvent("change", { bubbles: true, composed: true }),
		);
	}
}

customElements.define("ui-select", UiSelect);
