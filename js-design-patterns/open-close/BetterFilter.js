export default class BetterFilter {
    filter(items, spec) {
        return items.filter(i => spec.isSatisfied(i))
    }
}