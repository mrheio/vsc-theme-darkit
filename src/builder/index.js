const theme = () => {
	return {
		focusBorder,
		foreground,
		disabledForeground,
		'widget.border': widgetBorder,
		'widget.shadow': widgetShadow,
		'selection.background': selectionBackground,
		descriptionForeground,
		errorForeground,
		'icon.foreground': iconForeground,
		'sash.hoverBorder': sashHoverBorder,
		// only macos and linux with "window.titleBarStyle": "custom"
		'window.activeBorder': windowActiveBorder,
		'window.inactiveBorder': windowInactiveBorder,

		'textBlockQuote.background': textBlockQuoteBackground,
		'textBlockQuote.border': textBlockQuoteBorder,
		'textCodeBlock.background': textBlockQuoteBackground,
		'textLink.activeForeground': textLinkActiveForeground,
		'textLink.foreground': textLinkForeground,
		'textPreformat.foreground': textPreformatForeground,
		'textPreformat.background': textPreformatBackground,
		'textSeparator.foreground': textSeparatorForeground,

		'toolbar.hoverBackground': toolbarHoverBackground,
		'toolbar.hoverOutline': toolbarHoverOutline,
		'toolbar.activeBackground': toolbarActiveBackground,

		'button.background': buttonBackground,
		'button.foreground': buttonForeground,
		'button.border': buttonBorder,
		'button.separator': buttonSeparator,
		'button.hoverBackground': buttonHoverBackground,
		'button.secondaryForeground': buttonSecondaryForeground,
		'button.secondaryHoverBackground': buttonSecondaryHoverBackground,

		'checkbox.background': checkboxBackground,
		'checkbox.foreground': checkboxForeground,
		'checkbox.border': checkboxBorder,
		'checkbox.selectBackground': checkboxSelectBackground,
		'checkbox.selectBorder': checkboxSelectBorder,

		'dropdown.background': dropdownBackground,
		'dropdown.listBackground': dropdownListBackground,
		'dropdown.border': dropdownBorder,
		'dropdown.foreground': dropdownForeground,

		'input.background': inputBackground,
		'input.border': inputBorder,
		'input.foreground': inputForeground,
		'input.placeholderForeground': inputPlaceholderForeground,
		'inputOption.activeBackground': inputOptionActiveBackground,
		'inputOption.activeBorder': inputOptionActiveBorder,
		'inputOption.activeForeground': inputOptionActiveForeground,
		'inputOption.hoverBackground': inputOptionHoverBackground,
		'inputValidation.errorBackground': inputValidationErrorBackground,
		'inputValidation.errorForeground': inputValidationErrorForeground,
		'inputValidation.errorBorder': inputValidationErrorBorder,
		'inputValidation.infoBackground': inputValidationInfoBackground,
		'inputValidation.infoForeground': inputValidationInfoForeground,
		'inputValidation.infoBorder': inputValidationInfoBorder,
		'inputValidation.warningBackground': inputValidationWarningBackground,
		'inputValidation.warningForeground': inputValidationWarningForeground,
		'inputValidation.warningBorder': inputValidationWarningBorder,

		'scrollbar.shadow': scrollbarShadow,
		'scrollbarSlider.activeBackground': scrollbarSliderActiveBackground,
		'scrollbarSlider.background': scrollbarSliderBackground,
		'scrollbarSlider.hoverBackground': scrollbarSliderHoverBackground,

		'badge.foreground': badgeForeground,
		'badge.background': badgeBackground,

		'progressBar.background': progressBarBackground,

		'list.activeSelectionBackground': listActiveSelectionBackground,
		'list.activeSelectionForeground': listActiveSelectionForeground,
		'list.activeSelectionIconForeground':
			list.activeSelectionIconForeground,
		'list.dropBackground': listDropBackground,
		'list.focusBackground': listFocusBackground,
		'list.focusForeground': listFocusForeground,
		'list.focusHighlightForeground': listFocusHighlightForeground,
		'list.focusOutline': listFocusOutline,
		'list.focusAndSelectionOutline': listFocusAndSelectionOutline,
		'list.highlightForeground': listHighlightForeground,
		'list.hoverBackground': listHoverBackground,
		'list.hoverForeground': listHoverForeground,
		'list.inactiveSelectionBackground': listInactiveSelectionBackground,
		'list.inactiveSelectionForeground': listInactiveSelectionForeground,
		'list.inactiveSelectionIconForeground':
			listInactiveSelectionIconForeground,
		'list.inactiveFocusBackground': listInactiveFocusBackground,
		'list.inactiveFocusOutline': listInactiveFocusOutline,
		'list.invalidItemForeground': listInvalidItemForeground,
		'list.errorForeground': listErrorForeground,
		'list.warningForeground': listWarningForeground,
		'listFilterWidget.background': listFilterWidgetBackground,
		'listFilterWidget.outline': listFilterWidgetOutline,
		'listFilterWidget.noMatchesOutline': listFilterWidgetNoMatchesOutline,
		'listFilterWidget.shadow': listFilterWidgetShadow,
		'list.filterMatchBackground': listFilterMatchBackground,
		'list.filterMatchBorder': listFilterMatchBorder,
		'list.deemphasizedForeground': listDeemphasizedForeground,
		'tree.indentGuidesStroke': treeIndentGuidesStroke,
		'tree.inactiveIndentGuidesStroke': treeInactiveIndentGuidesStroke,
		'tree.tableColumnsBorder': treeTableColumnsBorder,
		'tree.tableOddRowsBackground': treeTableOddRowsBackground,

		'activityBar.background': activityBarBackground,
		'activityBar.dropBorder': activityBarDropBorder,
		'activityBar.foreground': activityBarForeground,
		'activityBar.inactiveForeground': activityBarInactiveForeground,
		'activityBar.border': activityBarBorder,
		'activityBarBadge.background': activityBarBadgeBackground,
		'activityBarBadge.foreground': activityBarBadgeForeground,
		'activityBar.activeBorder': activityBarActiveBorder,
		'activityBar.activeBackground': activityBarActiveBackground,
		'activityBar.activeFocusBorder': activityBarActiveFocusBorder,

		'profileBadge.background': profileBadgeBackground,
		'profileBadge.foreground': profileBadgeForeground,

		'sideBar.background': sideBarBackground,
		'sideBar.foreground': sideBarForeground,
		'sideBar.border': sideBarBorder,
		'sideBar.dropBackground': sideBarDropBackground,
		'sideBarTitle.foreground': sideBarTItleForeground,
		'sideBarSectionHeader.background': sideBarSectionHeaderBackground,
		'sideBarSectionHeader.foreground': sideBarSectionHeaderForeground,
		'sideBarSectionHeader.border': sideBarSectionHeaderBorder,

		'minimap.findMatchHighlight': minimapFindMatchHighlight,
		'minimap.selectionHighlight': minimapSelectionHighlight,
		'minimap.errorHighlight': minimapErrorHighlight,
		'minimap.warningHighlight': minimapWarningHighlight,
		'minimap.background': minimapBackground,
		'minimap.selectionOccurrenceHighlight':
			minimapSelectionOccurenceHighlight,
		'minimap.foregroundOpacity': minimapForegroundOpacity,
		'minimap.infoHighlight': minimapInfoHighlight,
		'minimapSlider.background': minimapSliderBackground,
		'minimapSlider.hoverBackground': minimapSliderHoverBackground,
		'minimapSlider.activeBackground': minimapSliderActiveBackground,
		'minimapGutter.addedBackground': minimapGutterAddedBackground,
		'minimapGutter.modifiedBackground': mminimapGutterModifiedBackground,
		'minimapGutter.deletedBackground': minimapGutterDeletedBackground,

		'editorGroup.border': editorGroupBorder,
		'editorGroup.dropBackground': editorGroupDropBackground,
		'editorGroupHeader.noTabsBackground': editorGroupHeaderNoTabsBackground,
		'editorGroupHeader.tabsBackground': editorGroupHeaderTabsBackground,
		'editorGroupHeader.tabsBorder': editorGroupHeaderTabsBorder,
		'editorGroupHeader.border': editorGroupHeaderBorder,
		'editorGroup.emptyBackground': editorGroupEmptyBackground,
		'editorGroup.focusedEmptyBorder': editorGroupFocusedEmptyBorder,
		'editorGroup.dropIntoPromptForeground':
			editorGroupDropIntoPromptForeground,
		'editorGroup.dropIntoPromptBackground':
			editorGroupDropIntoPromptBackground,
		'editorGroup.dropIntoPromptBorder': editorGroupDropIntoPromptBorder,
		'tab.activeBackground': tabActiveBackground,
		'tab.unfocusedActiveBackground': tabUnfocusedActiveBackground,
		'tab.activeForeground': tabActiveForeground,
		'tab.border': tabBorder,
		'tab.activeBorder': tabActiveBorder,
		'tab.unfocusedActiveBorder': tabUnfocusedActiveBorder,
		'tab.activeBorderTop': tabActiveBorderTop,
		'tab.unfocusedActiveBorderTop': tabUnfocusedActiveBorderTop,
		'tab.lastPinnedBorder': tabLastPinnedBorder,
		'tab.inactiveBackground': tabInactiveBackground,
		'tab.unfocusedInactiveBackground': tabUnfocusedInactiveBackground,
		'tab.inactiveForeground': tabInactiveForeground,
		'tab.unfocusedActiveForeground': tabUnfocusedActiveForeground,
		'tab.unfocusedInactiveForeground': tabUnfocusedInactiveForeground,
		'tab.hoverBackground': tabHoverBackground,
		'tab.unfocusedHoverBackground': tabUnfocusedHoverBackground,
		'tab.hoverForeground': tabHoverForeground,
		'tab.unfocusedHoverBorder': tabUnfocusedHoverBorder,
		'tab.activeModifiedBorder': tabActiveModifiedBorder,
		'tab.inactiveModifiedBorder': tabInactiveModifiedBorder,
		'tab.unfocusedActiveModifiedBorder': tabUnfocusedActiveModifiedBorder,
		'tab.unfocusedInactiveModifiedBorder':
			tabUnfocusedInactiveModifiedBorder,
		'editorPane.background': editorPaneBackground,
		'sideBySideEditor.horizontalBorder': sideBySideEditorHorizontalBorder,
		'sideBySideEditor.verticalBorder': sideBySideEditorVerticalBorder,

		'editor.background': editorBackground,
		'editor.foreground': editorForeground,
		'editorLineNumber.foreground': editorLineNumberForeground,
		'editorLineNumber.activeForeground': editorLineNumberActiveForeground,
		'editorLineNumber.dimmedForeground': editorLineNumberDimmedForeground,
		'editorCursor.background': editorCursorBackground,
		'editorCursor.foreground': editorCursorForeground,
		'editor.selectionBackground': editorSelectionBackground,
		'editor.selectionForeground': editorSelectionForeground,
		'editor.inactiveSelectionBackground': editorInactiveSelectionBackground,
		'editor.selectionHighlightBackground':
			editorSelectionHighlightBackground,
		'editor.selectionHighlightBorder': editorSelectionHighlightBorder,
	};
};