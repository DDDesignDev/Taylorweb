export function AudioVideo() {
  return (
    <section id="showreel" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 header-font">Performances</h2>
          <p className="text-muted-foreground">Watch and listen to selected performances</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Video Reels */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Video Reels</h3>
            <div className="space-y-6">
              <div className="aspect-video bg-muted overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Performance Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video bg-muted overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Behind the Scenes"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Audio Samples */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Audio Demos</h3>
            <div className="space-y-6">
              <div className="bg-card  p-6 shadow-lg">
                <h4 className="font-semibold mb-2">Defying Gravity - Wicked</h4>
                <p className="text-sm text-muted-foreground mb-4">Live Performance Recording</p>
                <audio controls className="w-full">
                  <source src="/placeholder.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div className="bg-card  p-6 shadow-lg">
                <h4 className="font-semibold mb-2">Burn - Hamilton</h4>
                <p className="text-sm text-muted-foreground mb-4">Studio Recording</p>
                <audio controls className="w-full">
                  <source src="/placeholder.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div className="bg-card  p-6 shadow-lg">
                <h4 className="font-semibold mb-2">I Dreamed a Dream - Les Mis</h4>
                <p className="text-sm text-muted-foreground mb-4">Concert Performance</p>
                <audio controls className="w-full">
                  <source src="/placeholder.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
