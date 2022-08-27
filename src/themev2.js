import colors from './colors.js';
import { workbenchStyles } from './styles/index.js';

const themev2 = {
    name: 'Darkit-Reborn',
    colors: workbenchStyles,
    semanticHighlighting: true,
    tokenColors: [
        {
            name: 'Comments',
            scope: ['comment'],
            settings: {
                foreground: colors.neutral[500],
            },
        },
        {
            name: 'Variable',
            scope: ['variable'],
            settings: { foreground: colors.neutral[200] },
        },
        {
            name: 'Functions',
            scope: [
                'entity.name.function',
                'support.function',
                'meta.function-call.generic',
                'meta.method.declaration storage.type',
            ],
            settings: {
                foreground: colors.yaleBlue[400],
            },
        },
        {
            name: 'Keywords | Keyword operator',
            scope: ['keyword'],
            settings: {
                foreground: colors.indigo[400],
            },
        },
        {
            name: 'Storage (let, const, async, function, class, extends, ...) | Variable language | Keyword operator expression | Keyword operator new',
            scope: [
                'storage',
                'variable.language',
                'keyword.operator.expression',
                'keyword.operator.new',
                'variable.parameter.function.language.special.self',
                'keyword.function',
            ],
            settings: {
                foreground: colors.indigo[400],
            },
        },
        {
            name: 'Classes',
            scope: [
                'support.class',
                'entity.name.type',
                'entity.other.inherited-class',
                'support.type.primitive',
                'entity.name.scope-resolution',
                'support.type',
            ],
            settings: {
                foreground: colors.rose[400],
            },
        },
        {
            name: 'Strings',
            scope: ['string'],
            settings: {
                foreground: colors.blizzardBlue[500],
            },
        },
        {
            name: 'Tags',
            scope: [
                'entity.name.tag',
                'support.type.property-name.json',
                'variable.language.this',
                'variable.language.super',
            ],
            settings: {
                foreground: colors.red[500],
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
                foreground: colors.neutral[400],
            },
        },
        {
            name: 'Attribute name',
            scope: ['entity.other.attribute-name'],
            settings: {
                foreground: colors.mikadoYellow[300],
            },
        },
        {
            name: 'Ids',
            scope: ['entity.other.attribute-name.id'],
            settings: {
                foreground: colors.indigo[400],
            },
        },
        {
            name: 'Constant',
            scope: ['support.constant', 'constant.language'],
            settings: {
                foreground: colors.orange[400],
            },
        },
        {
            name: 'Numeric constant',
            scope: ['constant.numeric'],
            settings: {
                foreground: colors.vividGreen[500],
            },
        },
        {
            name: 'Keyword operator',
            scope: ['keyword.operator'],
            settings: {
                foreground: colors.indigo[300],
            },
        },
        {
            name: 'Keyword operator assignment',
            scope: [
                'keyword.operator.assignment',
                'punctuation.accessor',
                'punctuation.separator.key-value',
            ],
            settings: {
                foreground: colors.debianRed[300],
            },
        },
        {
            name: 'CSS property name',
            scope: [
                'source.css support.type.property-name',
                'meta.property-list entity.name.tag',
            ],
            settings: {
                foreground: colors.blizzardBlue[500],
            },
        },
    ],
};

export default themev2;