import { Toggle } from './Toggle'

function App() {
  return (
    <div className="prose px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
      <h1>Tailwind CSS Variable Color Palette</h1>
      <p>
        This is an example of how CSS variables can be used for Tailwind colors.
      </p>
      <Toggle />
      <p>
        We can control background and border opacity using{' '}
        <code>bg-opacity-x</code> and <code>border-opacity-x</code>.
      </p>
      <div className="bg-foreground bg-opacity-10 flex justify-between p-2">
        {[
          'bg-opacity-0',
          'bg-opacity-20',
          'bg-opacity-40',
          'bg-opacity-60',
          'bg-opacity-80',
          'bg-opacity-100',
        ].map((v) => (
          <div key={v} class={`w-10 h-10 bg-accent ${v}`} />
        ))}
        {[
          'border-opacity-100',
          'border-opacity-80',
          'border-opacity-60',
          'border-opacity-40',
          'border-opacity-20',
          'border-opacity-0',
        ].map((v) => (
          <div key={v} class={`w-10 h-10 border-4 border-accent ${v}`} />
        ))}
      </div>
    </div>
  )
}

export default App
