import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MailIcon, TwitchIcon, TwitterIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoachingLandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src="/1.jpg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>Throw Coaching</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#achievements" className="text-sm font-medium hover:underline underline-offset-4">
              Achievements
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="#contact">Book a Session</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 w-full">
        <section id="about" className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master the Rift with Professional Coaching
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Challenger-tier coach with a proven track record of helping players climb from Bronze to Diamond and
                    beyond.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#achievements">View Achievements</Link>
                  </Button>
                </div>
              </div>
              <div className="transform scale-125 mx-auto">
                <Image
                  src="/placeholder-user.png"
                  alt="Coach Profile"
                  width={1200}
                  height={675}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Proven Results</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Achievements & Milestones</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A track record of success at the highest levels of competitive play.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Challenger Rank</h3>
                    <p className="text-sm text-muted-foreground">
                      Consistently achieved Challenger rank across multiple seasons
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">100+ Students</h3>
                    <p className="text-sm text-muted-foreground">
                      Successfully coached over 100 players to reach their desired rank
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Tournament Success</h3>
                    <p className="text-sm text-muted-foreground">Coached teams to victory in regional tournaments</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2 rounded-xl border bg-muted/50 p-6">
                <h3 className="text-xl font-bold">Coaching Experience</h3>
                <ul className="ml-6 list-disc text-muted-foreground [&>li]:mt-2">
                  <li>5+ years of professional coaching experience</li>
                  <li>Specialized in mid and jungle role optimization</li>
                  <li>Developed custom training programs for all skill levels</li>
                  <li>Partnered with esports organizations for team coaching</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 rounded-xl border bg-muted/50 p-6">
                <h3 className="text-xl font-bold">Player Achievements</h3>
                <ul className="ml-6 list-disc text-muted-foreground [&>li]:mt-2">
                  <li>Helped 30+ players reach Diamond from Gold or below</li>
                  <li>Coached 5 players to Master/Grandmaster tier</li>
                  <li>Improved win rates by an average of 15% for all students</li>
                  <li>Specialized champion pool development for competitive play</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Student Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't take my word for it - hear what my students have to say about their coaching experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Student Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Alex T.</h3>
                        <p className="text-sm text-muted-foreground">Bronze → Platinum</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "After being stuck in Bronze for 3 seasons, I reached out for coaching. Within 2 months, I climbed
                      to Platinum. The macro knowledge I gained completely changed how I approach the game."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Student Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Jamie K.</h3>
                        <p className="text-sm text-muted-foreground">Gold → Diamond</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The personalized VOD reviews were game-changing. I was making the same mistakes over and over
                      without realizing it. Now I'm Diamond and still improving with the strategies I learned."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Student Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Morgan P.</h3>
                        <p className="text-sm text-muted-foreground">Platinum → Master</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "I was skeptical about coaching at first, but the improvement was immediate. The champion pool
                      recommendations and matchup knowledge alone were worth it. Reached Master last season!"
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Student Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Taylor R.</h3>
                        <p className="text-sm text-muted-foreground">Silver → Diamond</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The custom practice routines and weekly check-ins kept me accountable. I went from hardstuck
                      Silver to Diamond in one season. Best investment I've made for my gameplay."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Climb?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch to schedule your first coaching session and start your journey to a higher rank.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="grid grid-cols-2 gap-4 py-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://discord.gg/JdjJCrcEth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M9 17l6-5-6-5" />
                      </svg>
                      Discord
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://www.twitch.tv/throwxd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <TwitchIcon className="h-5 w-5" />
                      Twitch
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://x.com/Throw5112"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <TwitterIcon className="h-5 w-5" />
                      Twitter
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="mailto:Leeunforgiven@gmail.com" className="flex items-center justify-center gap-2">
                      <MailIcon className="h-5 w-5" />
                      Email
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-col space-y-4">
                  <Button size="lg" className="w-full">
                    Book a Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Throw Coaching. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/Throw5112" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.twitch.tv/throwxd" target="_blank" rel="noopener noreferrer">
              <TwitchIcon className="h-5 w-5" />
              <span className="sr-only">Twitch</span>
            </Link>
            <Link href="https://discord.gg/JdjJCrcEth" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 17l6-5-6-5" />
              </svg>
              <span className="sr-only">Discord</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
