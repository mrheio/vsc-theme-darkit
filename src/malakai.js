import Color from 'color';
import colors from './colors.js';

const text = {
	highlight: Color(colors.gray[50]).hex(),
	base: Color(colors.gray[300]).hex(),
	dimmed: Color(colors.gray[600]).hex(),
};
const bg = {
	editor: Color(colors.gray[500]).darken(0.75).desaturate(0.65).hex(),
	blocks: Color(colors.gray[500]).darken(0.8).desaturate(0.65).hex(),
	highlight: Color(colors.gray[500]).darken(0.6).desaturate(0.65).hex(),
	highlightExtra: Color(colors.gray[500]).darken(0.5).desaturate(0.65).hex(),
};
const border = Color(colors.gray[500]).darken(0.85).desaturate(0.65).hex();
const accent = Color(colors.aquamarine[600]).hex();

const malakaiTheme = {
	name: 'Darkit Malakai',
	semanticHighlighting: true,
	colors: {
		foreground: text.base,
		descriptionForeground: text.dimmed,
		focusBorder: '#545c7e33',
		errorForeground: '#5a607d',
		'widget.shadow': border,
		'scrollbar.shadow': border,
		'badge.background': bg.highlight,
		'badge.foreground': text.highlight,
		'icon.foreground': text.base,
		'settings.headerForeground': '#6183bb',
		'window.activeBorder': '#0d0f17',
		'window.inactiveBorder': '#0d0f17',
		'sash.hoverBorder': '#29355a',

		'toolbar.activeBackground': '#2c324a',
		'toolbar.hoverBackground': '#2c324a',

		'extensionButton.prominentBackground': '#3d59a1DD',
		'extensionButton.prominentHoverBackground': '#3d59a1AA',
		'extensionButton.prominentForeground': '#ffffff',
		'extensionBadge.remoteBackground': '#3d59a1',
		'extensionBadge.remoteForeground': '#ffffff',

		'button.background': bg.highlight,
		'button.hoverBackground': bg.highlightExtra,
		'button.secondaryBackground': bg.highlightExtra,
		'button.foreground': '#ffffff',
		'progressBar.background': '#3d59a1',

		'input.background': bg.editor,
		'input.foreground': text.base,
		'input.border': border,
		'input.placeholderForeground': text.dimmed,
		'inputOption.activeForeground': accent,
		'inputOption.activeBackground': colors.transparent,
		'inputOption.activeBorder': colors.transparent,

		'inputValidation.infoForeground': '#bbc2e0',
		'inputValidation.infoBackground': '#3d59a15c',
		'inputValidation.infoBorder': '#3d59a1',
		'inputValidation.warningForeground': '#000000',
		'inputValidation.warningBackground': '#c2985b',
		'inputValidation.warningBorder': '#e0af68',
		'inputValidation.errorForeground': '#bbc2e0',
		'inputValidation.errorBackground': '#85353e',
		'inputValidation.errorBorder': '#963c47',

		'dropdown.foreground': text.base,
		'dropdown.background': bg.blocks,
		'dropdown.listBackground': '#1b1e2e',

		'activityBar.background': bg.blocks,
		'activityBar.foreground': text.base,
		//"activityBar.activeBorder": "#41496b",
		//"activityBar.activeBackground": "#1c2030",
		'activityBar.inactiveForeground': text.dimmed, //#3b4261
		'activityBar.border': border,
		'activityBarBadge.background': bg.highlight,
		'activityBarBadge.foreground': text.highlight,

		'tree.indentGuidesStroke': '#2e344f',
		'sideBar.foreground': text.dimmed,
		'sideBar.background': bg.blocks,
		'sideBar.border': border,
		'sideBarTitle.foreground': text.base,
		'sideBarSectionHeader.background': bg.blocks,
		'sideBarSectionHeader.foreground': text.highlight,
		'sideBarSectionHeader.border': border,
		'sideBar.dropBackground': bg.highlight,

		'list.dropBackground': bg.highlight,
		'list.deemphasizedForeground': '#7982a9',
		'list.activeSelectionBackground': bg.highlight,

		'list.activeSelectionForeground': text.base,
		'list.inactiveSelectionBackground': bg.highlight,
		'list.inactiveSelectionForeground': text.base,
		'list.focusBackground': bg.highlight,
		'list.focusForeground': text.highlight,
		'list.hoverBackground': bg.highlight,
		'list.hoverForeground': bg.dimmed,

		'list.highlightForeground': text.highlight,
		'list.invalidItemForeground': '#c97018',
		'list.errorForeground': '#bb616b',
		'list.warningForeground': '#c49a5a',

		'listFilterWidget.background': bg.blocks,
		'listFilterWidget.outline': '#3d59a1',
		'listFilterWidget.noMatchesOutline': '#a6333f',

		'pickerGroup.foreground': accent,
		'pickerGroup.border': border,

		'scrollbarSlider.background': bg.highlight,
		'scrollbarSlider.hoverBackground': bg.highlightExtra,
		'scrollbarSlider.activeBackground': accent,

		'editorBracketHighlight.foreground1': '#698cd6', //"#7AA2F7",
		'editorBracketHighlight.foreground2': '#68b3de', //"#7DCFFF",
		'editorBracketHighlight.foreground3': '#9a7ecc', //"#BB9AF7",
		'editorBracketHighlight.foreground4': '#25aac2', //"#2AC3DE",
		'editorBracketHighlight.foreground5': '#80a856', //"#9ECE6A",
		'editorBracketHighlight.foreground6': '#cfa25f', //"#e0af68",
		'editorBracketHighlight.unexpectedBracket.foreground': '#db4b4b',

		'editorBracketPairGuide.activeBackground1': '#698cd6',
		'editorBracketPairGuide.activeBackground2': '#68b3de',
		'editorBracketPairGuide.activeBackground3': '#9a7ecc',
		'editorBracketPairGuide.activeBackground4': '#25aac2',
		'editorBracketPairGuide.activeBackground5': '#80a856',
		'editorBracketPairGuide.activeBackground6': '#cfa25f',

		'selection.background': '#6f7bb635',
		'editor.background': bg.editor,
		'editor.foreground': text.highlight,
		'editor.foldBackground': '#181b294a',
		'editorLink.activeForeground': '#a9b1d6',

		'editor.selectionBackground': '#6f7bb640',
		'editor.inactiveSelectionBackground': '#6f7bb615',

		'editor.findMatchBackground': '#3d59a166',
		'editor.findMatchBorder': '#ffdb69aa',
		'editor.findMatchHighlightBackground': '#3d59a166',

		'editor.findRangeHighlightBackground': '#6f7bb625',
		'editor.rangeHighlightBackground': '#6f7bb620',
		'editor.wordHighlightBackground': '#6f7bb633',
		'editor.wordHighlightStrongBackground': '#6f7bb644',
		'editor.selectionHighlightBackground': '#6f7bb633',

		'editorCursor.foreground': '#c0caf5',
		'editorIndentGuide.background': '#292e42',
		'editorIndentGuide.activeBackground': '#3b4261',
		'editorLineNumber.foreground': text.dimmed,
		'editorLineNumber.activeForeground': accent,
		'editor.lineHighlightBackground': bg.highlight,
		'editorWhitespace.foreground': '#3b4261',

		'editorMarkerNavigation.background': '#1f2335',
		'editorHoverWidget.background': bg.highlight,
		'editorHoverWidget.border': border,

		'editorBracketMatch.background': '#1f2335',
		'editorBracketMatch.border': '#545c7e', //"#3b4261",

		'editorOverviewRuler.border': '#1b1e2e',
		'editorOverviewRuler.errorForeground': '#db4b4b',
		'editorOverviewRuler.warningForeground': '#e0af68',
		'editorOverviewRuler.infoForeground': '#1abc9c',
		'editorOverviewRuler.bracketMatchForeground': '#1b1e2e',
		'editorOverviewRuler.findMatchForeground': '#a9b1d644',
		'editorOverviewRuler.rangeHighlightForeground': '#a9b1d644',
		'editorOverviewRuler.selectionHighlightForeground': '#a9b1d622',
		'editorOverviewRuler.wordHighlightForeground': '#bb9af755',
		'editorOverviewRuler.wordHighlightStrongForeground': '#bb9af766',
		'editorOverviewRuler.modifiedForeground': '#3d547a',
		'editorOverviewRuler.addedForeground': '#164846',
		'editorOverviewRuler.deletedForeground': '#703438',

		'editorRuler.foreground': '#1b1e2e',
		'editorError.foreground': '#db4b4b',
		'editorWarning.foreground': '#e0af68',
		'editorInfo.foreground': '#0da0ba',
		'editorHint.foreground': '#0da0ba',

		'editorGutter.modifiedBackground': '#3d547a',
		'editorGutter.addedBackground': '#164846',
		'editorGutter.deletedBackground': '#823c41',

		'editorGhostText.foreground': '#7582ba',

		'minimapGutter.modifiedBackground': '#3d547a',
		'minimapGutter.addedBackground': '#1C5957',
		'minimapGutter.deletedBackground': '#944449',

		'editorGroup.border': border,
		'editorGroup.dropBackground': '#292e42',
		'editorGroupHeader.tabsBorder': colors.transparent,
		'editorGroupHeader.tabsBackground': bg.blocks,
		'editorGroupHeader.noTabsBackground': bg.blocks,
		'editorGroupHeader.border': colors.transparent,

		'editorPane.background': '#1f2335',

		'editorWidget.foreground': text.base,
		'editorWidget.background': bg.blocks,
		'editorWidget.resizeBorder': bg.highlight,

		'editorSuggestWidget.background': bg.blocks,
		'editorSuggestWidget.border': '#1b1e2e',
		'editorSuggestWidget.selectedBackground': '#282e44',
		'editorSuggestWidget.highlightForeground': '#668ac4',

		'editorCodeLens.foreground': '#565f89',
		'editorLightBulb.foreground': '#e0af68',
		'editorLightBulbAutoFix.foreground': '#e0af68',

		'peekView.border': border,
		'peekViewEditor.background': bg.blocks,
		'peekViewEditor.matchHighlightBackground': '#3d59a166',
		'peekViewTitle.background': bg.blocks,
		'peekViewTitleLabel.foreground': text.base,
		'peekViewTitleDescription.foreground': '#7982a9',
		'peekViewResult.background': bg.blocks,
		'peekViewResult.selectionForeground': text.base,
		'peekViewResult.selectionBackground': bg.highlight,
		'peekViewResult.lineForeground': '#a9b1d6',
		'peekViewResult.fileForeground': text.dimmed,
		'peekViewResult.matchHighlightBackground': '#3d59a166',

		'diffEditor.insertedTextBackground': '#41a6b520',
		'diffEditor.removedTextBackground': '#db4b4b22',
		'diffEditor.insertedLineBackground': '#41a6b520',
		'diffEditor.removedLineBackground': '#db4b4b22',
		'diffEditorGutter.insertedLineBackground': '#41a6b525',
		'diffEditorGutter.removedLineBackground': '#db4b4b22',
		'diffEditorOverview.insertedForeground': '#41a6b525',
		'diffEditorOverview.removedForeground': '#db4b4b22',
		'diffEditor.diagonalFill': '#2c324a',

		'tab.activeBackground': bg.editor,
		'tab.inactiveBackground': bg.blocks,
		'tab.activeForeground': text.base,
		'tab.hoverForeground': text.highlight,
		'tab.activeBorder': colors.transparent,
		'tab.activeBorderTop': accent,
		'tab.inactiveForeground': text.dimmed,
		'tab.border': colors.transparent,
		'tab.unfocusedActiveForeground': '#a9b1d6',
		'tab.unfocusedInactiveForeground': '#7982a9',
		'tab.unfocusedHoverForeground': '#a9b1d6',
		'tab.activeModifiedBorder': '#282d42',
		'tab.inactiveModifiedBorder': '#282d42',
		'tab.unfocusedActiveBorder': '#3b4261',
		'tab.lastPinnedBorder': '#2c3147',

		'breadcrumb.background': bg.editor,
		'breadcrumbPicker.background': bg.blocks,
		'breadcrumb.foreground': text.base,
		'breadcrumb.focusForeground': text.highlight,
		'breadcrumb.activeSelectionForeground': text.highlight,

		'panel.background': bg.blocks,
		'panel.border': border,
		'panelTitle.activeForeground': text.base,
		'panelTitle.inactiveForeground': text.dimmed,
		'panelTitle.activeBorder': accent,
		'panelInput.border': border,

		'statusBar.foreground': text.base,
		'statusBar.background': bg.blocks,
		'statusBar.border': border,
		'statusBar.noFolderBackground': bg.blocks,
		'statusBar.debuggingBackground': bg.editor,
		'statusBar.debuggingForeground': text.base,
		'statusBarItem.activeBackground': bg.highlight,
		'statusBarItem.hoverBackground': bg.editor,
		'statusBarItem.prominentBackground': '#1b1e2e',
		'statusBarItem.prominentHoverBackground': '#282e44',

		'titleBar.activeForeground': text.dimmed,
		'titleBar.inactiveForeground': text.dimmed,
		'titleBar.activeBackground': bg.blocks,
		'titleBar.inactiveBackground': bg.blocks,
		'titleBar.border': border,

		'walkThrough.embeddedEditorBackground': '#1f2335',
		'textLink.foreground': accent,
		'textLink.activeForeground': '#7dcfff',
		'textPreformat.foreground': accent,
		'textBlockQuote.background': bg.blocks,
		'textCodeBlock.background': bg.blocks,
		'textSeparator.foreground': '#545c7e',

		'debugExceptionWidget.border': '#963c47',
		'debugExceptionWidget.background': '#1b1e2e',
		'debugToolBar.background': '#1b1e2e',

		'debugConsole.infoForeground': '#7982a9',
		'debugConsole.errorForeground': '#bb616b',
		'debugConsole.sourceForeground': '#7982a9',
		'debugConsole.warningForeground': '#c49a5a',
		'debugConsoleInputIcon.foreground': '#73daca',

		'editor.stackFrameHighlightBackground': '#e2bd3a20',
		'editor.focusedStackFrameHighlightBackground': '#73daca20',
		'debugView.stateLabelForeground': '#7982a9',
		'debugView.stateLabelBackground': '#1b1e2e',
		'debugView.valueChangedHighlight': '#3d59a1cc',
		'debugTokenExpression.name': '#7dcfff',
		'debugTokenExpression.value': '#9aa5ce',
		'debugTokenExpression.string': '#9ece6a',
		'debugTokenExpression.boolean': '#ff9e64',
		'debugTokenExpression.number': '#ff9e64',
		'debugTokenExpression.error': '#bb616b',

		'debugIcon.breakpointForeground': '#db4b4b',
		'debugIcon.breakpointDisabledForeground': '#545c7e',
		'debugIcon.breakpointUnverifiedForeground': '#c24242',

		'terminal.background': bg.blocks,
		'terminal.foreground': text.base,
		'terminal.selectionBackground': bg.highlight,
		// "terminalCursor.background": "",
		// "terminalCursor.foreground": "",

		'terminal.ansiBlack': '#414868',
		'terminal.ansiRed': '#f7768e',
		'terminal.ansiGreen': '#73daca',
		'terminal.ansiYellow': '#e0af68',
		'terminal.ansiBlue': '#7aa2f7',
		'terminal.ansiMagenta': '#bb9af7',
		'terminal.ansiCyan': '#7dcfff',
		'terminal.ansiWhite': '#7982a9',
		'terminal.ansiBrightBlack': '#414868',
		'terminal.ansiBrightRed': '#f7768e',
		'terminal.ansiBrightGreen': '#73daca',
		'terminal.ansiBrightYellow': '#e0af68',
		'terminal.ansiBrightBlue': '#7aa2f7',
		'terminal.ansiBrightMagenta': '#bb9af7',
		'terminal.ansiBrightCyan': '#7dcfff',
		'terminal.ansiBrightWhite': '#a9b1d6',

		'gitDecoration.modifiedResourceForeground': '#6183bb',
		'gitDecoration.ignoredResourceForeground': '#545c7e',
		'gitDecoration.deletedResourceForeground': '#914c54',
		'gitDecoration.renamedResourceForeground': '#449dab',
		'gitDecoration.addedResourceForeground': '#449dab',
		'gitDecoration.untrackedResourceForeground': '#449dab',
		'gitDecoration.conflictingResourceForeground': '#e0af68cc',
		'gitDecoration.stageDeletedResourceForeground': '#914c54',
		'gitDecoration.stageModifiedResourceForeground': '#6183bb',

		'notebook.editorBackground': '#24283b',
		'notebook.cellEditorBackground': '#1f2335',
		'notebook.cellBorderColor': '#1b1e2e',
		'notebook.focusedCellBorder': '#29355a',
		'notebook.cellStatusBarItemHoverBackground': '#2c324a',

		'charts.red': '#f7768e',
		'charts.blue': '#7aa2f7',
		'charts.yellow': '#e0af68',
		'charts.orange': '#ff9e64',
		'charts.green': '#73daca',
		'charts.purple': '#9d7cd8',
		'charts.foreground': '#9AA5CE',
		'charts.lines': '#1f2335',

		'merge.currentHeaderBackground': '#41a6b525',
		'merge.currentContentBackground': '#007a7544',
		'merge.incomingHeaderBackground': '#3d59a1aa',
		'merge.incomingContentBackground': '#3d59a144',
		'mergeEditor.change.background': '#41a6b525',
		'mergeEditor.change.word.background': '#41a6b540',
		'mergeEditor.conflict.unhandledUnfocused.border': '#e0af6888',
		'mergeEditor.conflict.unhandledFocused.border': '#e0af68d9',
		'mergeEditor.conflict.handledUnfocused.border': '#41a6b525',
		'mergeEditor.conflict.handledFocused.border': '#41a6b565',
		'mergeEditor.conflict.handled.minimapOverViewRuler': '#449dab',
		'mergeEditor.conflict.unhandled.minimapOverViewRuler': '#e0af68',

		'gitlens.trailingLineForegroundColor': '#7582ba',
		'gitlens.gutterUncommittedForegroundColor': '#7aa2f7',
		'gitlens.gutterForegroundColor': '#7982a9',
		'gitlens.gutterBackgroundColor': '#1f2335',

		'notificationCenterHeader.background': '#1b1e2e',
		'notifications.background': bg.blocks,
		'notificationLink.foreground': '#6183bb',
		'notificationsErrorIcon.foreground': '#bb616b',
		'notificationsWarningIcon.foreground': '#bba461',
		'notificationsInfoIcon.foreground': '#0da0ba',

		'menubar.selectionForeground': text.base,
		'menubar.selectionBackground': bg.highlight,
		'menubar.selectionBorder': border,
		'menu.foreground': '#7982a9',
		'menu.background': bg.blocks,
		'menu.selectionForeground': text.base,
		'menu.selectionBackground': bg.highlight,
		'menu.separatorBackground': border,
		'menu.border': border,
	},
	tokenColors: [
		{
			name: 'Comments',
			scope: ['comment'],
			settings: {
				foreground: colors.darkBlue[300],
			},
		},
		{
			name: 'Variable',
			scope: ['variable'],
			settings: { foreground: colors.slate[100] },
		},
		{
			name: 'Variable other property',
			scope: [
				'support.variable',
				'variable.other.predefined',
				'variable.other.property',
				'meta.object.member',
			],
			settings: {
				foreground: colors.orange[200],
			},
		},
		{
			name: 'Variable other readwrite alias',
			scope: ['variable.other.readwrite.alias', 'entity.name.namespace'],
			settings: {
				foreground: colors.violet[300],
			},
		},
		{
			name: 'Variable other constant object',
			scope: ['variable.other.constant.object'],
			settings: {
				foreground: colors.slate[300],
			},
		},
		{
			name: 'Functions',
			scope: [
				'entity.name.function',
				'support.function',
				'meta.function-call.generic',
				'support.function.magic',
				'punctuation.definition.template-expression',
			],
			settings: {
				foreground: colors.indigo[400],
			},
		},
		{
			name: 'Function parameter',
			scope: ['variable.parameter'],
			settings: {
				foreground: colors.indigo[200],
				fontStyle: 'italic',
			},
		},
		{
			name: 'Strings',
			scope: ['string'],
			settings: {
				foreground: colors.yellow[300],
			},
		},
		{
			name: 'String regex',
			scope: ['string.regexp'],
			settings: {
				foreground: colors.yellow[400],
				fontStyle: 'italic',
			},
		},
		{
			name: 'Primitives',
			scope: [
				'support.type.primitive',
				'entity.other.attribute-name.pseudo-class',
				'entity.other.attribute-name.pseudo-element',
			],
			settings: {
				foreground: colors.violet[400],
			},
		},
		{
			name: 'Constant',
			scope: [
				'support.constant',
				'constant.language',
				'support.type.builtin',
			],
			settings: {
				foreground: colors.cyan[400],
			},
		},
		{
			name: 'Numeric constant',
			scope: ['constant.numeric'],
			settings: {
				foreground: colors.cyan[400],
			},
		},
		{
			name: 'Keyword operator',
			scope: [
				'keyword.operator',
				'keyword.operator.assignment',
				'punctuation.accessor',
				'punctuation.separator.key-value',
				'punctuation.definition.block.sequence.item',
				'punctuation.separator.dictionary.key-value',
				'punctuation.definition.variable',
				'punctuation.separator.colon',
				'punctuation.separator.period',
				'punctuation.section',
				'keyword.other.unit',
			],
			settings: {
				foreground: colors.violet[400],
			},
		},
		{
			name: 'Keywords | Keyword operator',
			scope: ['keyword', 'meta.method.declaration storage.type'],
			settings: {
				foreground: colors.aquamarine[600],
			},
		},
		{
			name: 'Storage (let, const, async, function, class, extends, ...) | Variable language | Keyword operator expression | Keyword operator new',
			scope: [
				'storage',
				'variable.language',
				'keyword.operator.expression',
				'keyword.operator.new',
				'keyword.function',
			],
			settings: {
				foreground: colors.aquamarine[600],
			},
		},
		{
			name: 'Classes',
			scope: [
				'support.class',
				'entity.name.type',
				'entity.other.inherited-class',
				'entity.name.scope-resolution',
				'support.type',
			],
			settings: {
				foreground: colors.pink[500],
			},
		},
		{
			name: 'Tags',
			scope: [
				'entity.name.tag',
				'variable.language.this',
				'variable.language.super',
				'variable.parameter.function.language.special.self',
				'variable.language.special.self',
				'entity.name.tag.reference',
			],
			settings: {
				foreground: colors.pink[500],
			},
		},
		{
			name: 'Punctuation tag',
			scope: [
				'punctuation.definition.tag.begin',
				'punctuation.definition.tag.end',
				'punctuation.definition.typeparameters.begin',
				'punctuation.definition.typeparameters.end',
			],
			settings: {
				foreground: colors.pink[700],
			},
		},
		{
			name: 'HTML Attribute name',
			scope: ['entity.other.attribute-name'],
			settings: {
				foreground: colors.pink[400],
				fontStyle: 'italic',
			},
		},
		{
			name: 'HTML Ids',
			scope: ['entity.other.attribute-name.id'],
			settings: {
				foreground: colors.orange[400],
			},
		},
		{
			name: 'Json key, Yaml key',
			scope: [
				'support.type.property-name.json',
				'source.yaml entity.name.tag',
				'source.css support.type.property-name',
			],
			settings: {
				foreground: colors.blueGreen[300],
			},
		},
	],
};

export default malakaiTheme;
