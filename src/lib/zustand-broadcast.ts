import { StoreApi } from 'zustand'

export function broadcast<T>(store: StoreApi<T>, id: string = 'zustand-broadcast'): void {
  if ('BroadcastChannel' in globalThis) {
    let justReceived = false
    const channel = new BroadcastChannel(id)

    channel.onmessage = ({ data }: MessageEvent) => {
      justReceived = true
      store.setState(JSON.parse(data))
      justReceived = false
    }

    store.subscribe((state: T) => {
      if (!justReceived) {
        channel.postMessage(JSON.stringify(state))
      }
    })
  }
}