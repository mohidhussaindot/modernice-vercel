<template>
  <div class="min-h-screen bg-black text-white font-sans px-6 py-16 md:px-20 md:py-34">
    <main class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Blog Content -->
      <article class="md:col-span-2 bg-gray-900 rounded-xl shadow-lg p-10">
        <h1 class="text-4xl font-semibold mb-6 text-white">Exploring the Future of Web Design</h1>
        <p class="text-lg leading-relaxed mb-8 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <section class="prose prose-invert prose-lg max-w-none mb-10">
          <h2 class="text-cyan-400">Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur vehicula
            magna, a cursus risus commodo in. Morbi sed condimentum elit, at fringilla elit. Nullam
            euismod lorem non ex convallis faucibus.
          </p>
          <p>
            Curabitur posuere, odio sed luctus blandit, erat sapien efficitur lacus, non tempor elit
            erat a tortor. Maecenas feugiat ante sapien, vitae efficitur elit scelerisque ut.
          </p>

          <h2 class="text-cyan-400">Current Trends in Web Design</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <ul class="list-disc pl-5 space-y-2 text-gray-300">
            <li>Minimalistic user interfaces</li>
            <li>Dark mode integration</li>
            <li>Micro-interactions to boost engagement</li>
            <li>Accessibility-first design</li>
          </ul>

          <h2 class="text-cyan-400">Challenges Ahead</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>

          <blockquote class="border-l-4 border-cyan-400 pl-4 italic text-gray-400 my-6">
            "Design is not just what it looks like and feels like. Design is how it works." – Steve
            Jobs
          </blockquote>

          <h2 class="text-cyan-400">Conclusion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar malesuada
            mauris, et faucibus velit gravida eu. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
        </section>

        <div class="mt-8 flex space-x-6 text-gray-500 text-sm">
          <div>Published: Oct 21, 2025</div>
          <div>Author: Jane Doe</div>
          <div>Reading time: 7 min</div>
        </div>
      </article>

      <!-- Sidebar -->
      <aside class="space-y-10">
        <section class="bg-gray-900 rounded-xl shadow p-6">
          <h3 class="font-bold text-xl mb-4 border-b border-cyan-600 pb-2 text-white"
            >Recent Posts</h3
          >
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                How to Improve UX in 2025
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                Tailwind CSS: Tips & Tricks
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                Building Accessible Websites
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                The Rise of Dark Mode
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                Micro-interactions Explained
              </a>
            </li>
          </ul>
        </section>

        <section class="bg-gray-900 rounded-xl shadow p-6">
          <h3 class="font-bold text-xl mb-4 border-b border-cyan-600 pb-2 text-white"
            >Categories</h3
          >
          <ul class="space-y-3 text-gray-300">
            <li>
              <a href="#" class="hover:text-cyan-400 hover:underline transition-colors"
                >Web Design</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-cyan-400 hover:underline transition-colors"
                >Development</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-cyan-400 hover:underline transition-colors">UX/UI</a>
            </li>
            <li>
              <a href="#" class="hover:text-cyan-400 hover:underline transition-colors"
                >Accessibility</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-cyan-400 hover:underline transition-colors"
                >CSS & Styling</a
              >
            </li>
          </ul>
        </section>

        <section class="bg-gray-900 rounded-xl shadow p-6">
          <h3 class="font-bold text-xl mb-4 border-b border-cyan-600 pb-2 text-white"
            >About This Blog</h3
          >
          <p class="text-gray-400 text-sm leading-relaxed">
            This blog covers the latest in web design, development, UX/UI, and accessibility. Stay
            tuned for tips, tutorials, and insights to help you create better web experiences.
          </p>
        </section>
      </aside>
    </main>
  </div>
</template>
