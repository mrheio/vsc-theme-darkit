import Color from 'color';
import colors from '../colors.js';
import { createTokenColors } from '../utils/tokens.js';

const editorBg = '#202020';
const blocksBg = '#1c1c1c';
const border = '#ffffff00';
const foreground = '#9ca3b3';
const accent = colors.cyan[100];

const atomicTheme = {
	name: 'Darkit Atomic',
	colors: {
		// general
		focusBorder: accent,
		foreground: foreground,
		errorForeground: '#FF4B82',
		'activityBar.background': blocksBg,
		'activityBar.foreground': Color(foreground).lighten(0.25).hex(),
		'activityBar.border': colors.transparent,
		'activityBarBadge.background': accent,
		'activityBarBadge.foreground': colors.white,
		'badge.background': accent,
		'badge.foreground': colors.white,
		'progressBar.background': accent,
		'button.background': accent,
		'button.foreground': colors.white,
		'button.hoverBackground': Color(accent).lighten(0.1).hex(),
		'diffEditor.insertedTextBackground': '#19f9d844',
		'diffEditor.removedTextBackground': '#FF4B8244',
		'merge.currentHeaderBackground': '#B084EB90',
		'merge.currentContentBackground': '#B084EB40',
		'merge.incomingHeaderBackground': '#45A9F990',
		'merge.incomingContentBackground': '#FFB86C40',
		// editor styles
		'editor.background': editorBg,
		'editor.foreground': Color(foreground).lighten(0.35).hex(),
		'editorCursor.foreground': colors.roseRed[400],
		'editorRuler.foreground': '#B084EB60',
		'editorBracketMatch.border': accent,
		'editorCodeLens.foreground': '#FFB86C40',
		'editorWhitespace.foreground': '#3E4250',
		'editor.selectionBackground': `${Color(editorBg).lighten(1.5).hex()}aa`,
		'editor.inactiveSelectionBackground': '#FFB86C40',
		'editor.selectionHighlightBackground': '#FFB86C40',
		'editor.wordHighlightBackground': `${Color(editorBg)
			.lighten(1.5)
			.hex()}aa`,
		'editor.wordHighlightStrongBackground': `${Color(editorBg)
			.lighten(1)
			.hex()}77`,
		'editor.findMatchBackground': `${Color(accent).hex()}55`,
		'editor.findMatchHighlightBackground': `${Color(accent).hex()}33`,
		'editor.lineHighlightBackground': `${Color(editorBg)
			.lighten(0.5)
			.hex()}77`,
		'editorLineNumber.foreground': '#414759',
		'editorLineNumber.activeForeground': '#696F7C',
		'editorSuggestWidget.selectedBackground': '#31353a',
		'editorHoverWidget.background': '#31353a',
		'editorOverviewRuler.border': '#00000000',
		'editorOverviewRuler.modifiedForeground': '#FFCC95',
		'editorOverviewRuler.addedForeground': colors.indigo[300],
		'editorOverviewRuler.deletedForeground': '#FF4B82',
		'editorOverviewRuler.errorForeground': '#FF4B82',
		'editorOverviewRuler.warningForeground': '#FFCC95',
		'editorOverviewRuler.infoForeground': '#6FC1FF',
		'extensionButton.prominentForeground': '#FFFFFF',
		'extensionButton.prominentBackground': '#45A9F9',
		'extensionButton.prominentHoverBackground': '#676B79',
		'editorError.foreground': '#FF4B82',
		'editorError.border': '#292A2B',
		'editorWarning.foreground': '#FFCC95',
		'editorWarning.border': '#292A2B',
		'editorGutter.modifiedBackground': '#FFCC95',
		'editorGutter.addedBackground': colors.indigo[300],
		'editorGutter.deletedBackground': '#FF4B82',
		'gitDecoration.ignoredResourceForeground': '#757575',
		// sidebar (files explorer) items styles
		'list.hoverBackground': Color(blocksBg).lighten(0.6).hex(),
		'list.hoverForeground': foreground,
		'list.focusBackground': Color(blocksBg).lighten(0.6).hex(),
		'list.focusForeground': accent,
		'list.activeSelectionBackground': Color(blocksBg).lighten(0.6).hex(),
		'list.activeSelectionForeground': Color(foreground).lighten(0.5).hex(),
		'list.inactiveSelectionBackground': Color(blocksBg).lighten(0.6).hex(),
		'list.inactiveSelectionForeground': Color(foreground)
			.lighten(0.5)
			.hex(),
		'list.highlightForeground': accent,
		'listFilterWidget.background': Color(blocksBg).lighten(0.5).hex(),
		'listFilterWidget.outline': accent,
		'listFilterWidget.noMatchesOutline': '#a6333f',
		'editorWidget.background': blocksBg,
		'editorWidget.border': border,
		'input.background': Color(blocksBg).darken(0.5).hex(),
		'input.foreground': Color(foreground).lighten(0.25).hex(),
		'input.border': `${accent}55`,
		'input.placeholderForeground': Color(foreground).darken(0.25).hex(),
		'inputOption.activeForeground': accent,
		'inputOption.activeBackground': Color(blocksBg).lighten(0.5).hex(),
		'inputOption.activeBorder': colors.transparent,
		'dropdown.background': Color(blocksBg).darken(0.25).hex(),
		'dropdown.listBackground': Color(blocksBg).darken(0.25).hex(),
		'dropdown.border': colors.transparent,
		'dropdown.foreground': foreground,
		// sidebar (files explorer) styles
		'sideBar.background': blocksBg,
		'sideBar.foreground': foreground,
		'sideBar.border': border,
		'sideBarTitle.foreground': foreground,
		'sideBarSectionHeader.background': blocksBg,
		'sideBarSectionHeader.foreground': foreground,
		'sideBarSectionHeader.border': colors.transparent,
		'sideBar.dropBackground': `${accent}55`,
		// scroll styles
		'scrollbar.shadow': Color(blocksBg).darken(0.9).hex(),
		'scrollbarSlider.background': Color(blocksBg).lighten(0.75).hex(),
		'scrollbarSlider.activeBackground': Color(blocksBg).lighten(1.25).hex(),
		'scrollbarSlider.hoverBackground': Color(blocksBg).lighten(1).hex(),
		// bottom bar styles
		'statusBar.background': blocksBg,
		'statusBar.foreground': foreground,
		'statusBar.border': border,
		'statusBar.noFolderBackground': blocksBg,
		'statusBar.noFolderForeground': foreground,
		'statusBar.debuggingBackground': editorBg,
		'statusBar.debuggingForeground': foreground,
		// top bar styles
		'titleBar.activeBackground': blocksBg,
		'titleBar.activeForeground': foreground,
		'titleBar.inactiveBackground': blocksBg,
		'titleBar.inactiveForeground': foreground,
		// menu styles,
		'menu.foreground': foreground,
		'menu.background': blocksBg,
		'menubar.selectionForeground': Color(foreground).lighten(0.25).hex(),
		'menubar.selectionBackground': Color(blocksBg).lighten(0.5).hex(),
		'menubar.selectionBorder': colors.transparent,
		'menu.selectionForeground': Color(foreground).lighten(0.25).hex(),
		'menu.selectionBackground': Color(blocksBg).lighten(0.5).hex(),
		'menu.separatorBackground': border,
		'menu.border': border,
		// tabs styles
		'tab.activeBackground': editorBg,
		'tab.activeForeground': foreground,
		'tab.activeBorder': colors.transparent,
		'tab.activeBorderTop': accent,
		'tab.inactiveBackground': blocksBg,
		'tab.inactiveForeground': foreground,
		'editorGroupHeader.tabsBackground': blocksBg,
		// terminal styles
		'panel.background': blocksBg,
		'panel.border': border,
		'terminalCursor.background': foreground,
		'terminalCursor.foreground': Color(foreground).darken(0.35).hex(),
		// terminal colors
		'terminal.ansiBlack': '#414868',
		'terminal.ansiRed': '#f7768e',
		'terminal.ansiGreen': '#73daca',
		'terminal.ansiYellow': '#E3B777',
		'terminal.ansiBlue': '#7aa2f7',
		'terminal.ansiMagenta': '#bb9af7',
		'terminal.ansiCyan': '#7dcfff',
		'terminal.ansiWhite': '#a7b0d4',
		'terminal.ansiBrightBlack': '#414868',
		'terminal.ansiBrightRed': '#f7768e',
		'terminal.ansiBrightGreen': '#73daca',
		'terminal.ansiBrightYellow': '#e0af68',
		'terminal.ansiBrightBlue': '#7aa2f7',
		'terminal.ansiBrightMagenta': '#bb9af7',
		'terminal.ansiBrightCyan': '#7dcfff',
		'terminal.ansiBrightWhite': '#a9b1d6',
		// git
		'gitDecoration.modifiedResourceForeground': '#84b2ff',
		'gitDecoration.ignoredResourceForeground': '#545c7e',
		'gitDecoration.deletedResourceForeground': '#914c54',
		'gitDecoration.renamedResourceForeground': '#449dab',
		'gitDecoration.addedResourceForeground': '#449dab',
		'gitDecoration.untrackedResourceForeground': '#449dab',
		'gitDecoration.conflictingResourceForeground': '#e0af68cc',
		'gitDecoration.stageDeletedResourceForeground': '#914c54',
		'gitDecoration.stageModifiedResourceForeground': '#6183bb',
		// brackets
		'editorBracketHighlight.foreground1': '#7AA2F7', //"#7AA2F7",
		'editorBracketHighlight.foreground2': '#7DCFFF', //"#7DCFFF",
		'editorBracketHighlight.foreground3': '#BB9AF7', //"#BB9AF7",
		'editorBracketHighlight.foreground4': '#2AC3DE', //"#2AC3DE",
		'editorBracketHighlight.foreground5': '#9ECE6A', //"#9ECE6A",
		'editorBracketHighlight.foreground6': '#e0af68', //"#e0af68",
		'editorBracketHighlight.unexpectedBracket.foreground': '#db4b4b',
		// debug
		'debugToolBar.background': blocksBg,
	},
	tokenColors: createTokenColors({
		comments: { color: '#5C626F' },
		variables: { color: Color(foreground).lighten(0.4).hex() },
		strings: { color: colors.emerald[200] },
		regex: { color: colors.cyan[100] },
		keywords: { color: colors.purple[300] },
		storage: { color: colors.purple[300] },
		functions: { color: colors.blue[300] },
		functionParameters: { color: Color(foreground).lighten(0.4).hex() },
		classes: { color: colors.orange[200] },
		tags: { color: colors.roseRed[300] },
		tagsPunctuation: { color: Color(foreground).lighten(0.25).hex() },
		htmlAttributes: { color: colors.orange[300] },
		htmlIds: { color: colors.cyan[300] },
		primitives: { color: colors.cyan[100] },
		constants: { color: colors.orange[200] },
		numbers: { color: colors.orange[200] },
		objectProperties: { color: Color(foreground).lighten(0.35).hex() },
		operators: { color: colors.lightBlue[300] },
		jsonYamlKeys: { color: colors.roseRed[300] },
		readWriteAliases: { color: Color(foreground).lighten(0.3).hex() },
	}),
	semanticHighlighting: true,
};

export default atomicTheme;
