import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
    const typeScriptloader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typeScriptloader,
    ]
}