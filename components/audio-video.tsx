export function AudioVideo() {
  return (
    <section id="showreel" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 header-font">Reels and Demos</h2>
        </div>

        <div className="grid md:grid-cols-2 md:gap-8">
          {/* Vocal Reel */}
            <div className="block md:hidden">
              <h4 className="font-semibold mb-2">Vocal Reel</h4>
              <p className="text-sm text-muted-foreground mb-4">Watch my vocal reel from a combination of performances</p>
            </div>
            <div className="aspect-video bg-muted overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://youtube.com/embed/Xk8VB32uNgw"
                title="Performance Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="hidden md:flex flex-col items-start justify-center">
              <h4 className="font-semibold mb-2">Vocal Reel</h4>
              <p className="text-sm text-muted-foreground mb-4">Watch my vocal reel from a combination of performances</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-8 pt-8">
          {/* Casting Workbook */}
          <div className="flex flex-col items-end justify-center">
            <h4 className="font-semibold mb-2">Casting Workbook</h4>
            <p className="text-sm text-muted-foreground mb-4">Live Performance Recording</p>
          </div>
          <div className="aspect-video bg-muted overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LGwIA9g910Y"
              title="Behind the Scenes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
