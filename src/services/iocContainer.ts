export interface IOCObject<T> {
    [key: string]: T
}

export class IOCContainer {
    private services: IOCObject<any>
    private instances: IOCObject<any>
    private strategies: IOCObject<any>
    private keys: {[key: string]: string}
    private proxy: any

    constructor() {
        this.services = {}
        this.instances = {}
        this.strategies = {}
        this.keys = {}
        this.proxy = new Proxy(this, {
            get(object, property: string, receiver): any {
                if (property in object.keys) {
                    return object.get(property)
                }
                return Reflect.get(object, property, receiver)
            },
        })

        return this.proxy
    }

    put = (
        id: string,
        service: IOCObject<any>,
        strategy = 'STRATEGY_CACHED',
    ) => {
        if (!(id in this.keys)) {
            this.keys[id] = id
        }

        if (!!this.services[id]) {
            console.warn(`Service ${id} already exist`)
            return
        }

        this.services[id] = service
        this.instances[id] = null
        this.strategies[id] = strategy
    }

    get = (id: string) => {
        let instance = this.instances[id]
        const service = this.services[id]
        const strategy = this.strategies[id]
        if (!service) {
            console.warn(`Service ${id} does not exist`)
            return
        }

        if (strategy === 'STRATEGY_NEW') {
            return service(this.proxy)
        }

        if (!instance) {
            instance = service(this.proxy)
            this.instances[id] = instance
        }

        return this.instances[id]
    }
}

export default IOCContainer
