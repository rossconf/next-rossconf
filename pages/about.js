import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

function About() {
  return (<>
    <Head>
      <title>ROSS Conf</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <aside>
      <a href='/about'>About ROSS Conf</a>
    </aside>

    <div className="container-xl">
      <row>
        <h1>
          Welcome to <a href="https://rossconf.io">ROSS Conf!</a>
        </h1>

        <br />

        <ReactMarkdown source={
          `
The first ever ROSS Conf took place in Vienna, Austria, April 25, 2015. The projects participating: [exercism.io](https://exercism.io), with [Katrina Owen](https://twitter.com/kytrinyx), [RVM](http://rvm.io/) (aka the first version manager for installing Ruby dependencies), with [Michal Papis](https://twitter.com/mpapis), [Diaspora](https://joindiaspora.com/), with Lisa Passing, [reek](https://github.com/troessner/reek), with [Piotr Szotkowski](https://twitter.com/chastell), and [Yaks](https://github.com/plexus/yaks), with [Arne Brasseur](https://twitter.com/plexus). The founding team included [Aaron Cruz](https://twitter.com/mraaroncruz), [Sebastian Gräßl](https://twitter.com/bastilian), [Kurt Lojka](https://twitter.com/kurtfresh), [Laura Gaetano](https://twitter.com/alicetragedy), [Pilar Huidobro](https://twitter.com/Althaire), [Ramon Huidobro](https://twitter.com/hola_soy_milk), and [Shelly Coen](https://twitter.com/shellycoen).

Later that same year we ran a second ROSS Conf, in Berlin, Germany. The projects participating for the September 26 edition, hosted by Wooga, were: [Panamax](http://panamax.io/), with [Laura Frank](https://twitter.com/rhein_wein) (now Laura Tacho), [Bundler](http://bundler.io/), with [André Arko](https://twitter.com/indirect), [Ruby Object Mapper (ROM)](http://rom-rb.org/), with [Piotr Solnica](https://twitter.com/_solnic_), [Speakerinnen](https://speakerinnen.org/), with [Tyranja](https://twitter.com/_tyranja_), and [Ruby](https://github.com/ruby/ruby) itself, with Zachary Scott.
Team members for Berlin included [Aaron Cruz](https://twitter.com/mraaroncruz), [Sebastian Gräßl](https://twitter.com/bastilian), [Laura Gaetano](https://twitter.com/alicetragedy), [Gosia Cieśla](https://twitter.com/gosia_ciesla), [Sara Regan](https://twitter.com/sareg0).

For the 2018 ROSS Conf location, we picked Amsterdam. May 11-12, participants worked on: [exercism.io](http://exercism.io/) ([maintainer interview with Katrina Owen](https://vimeo.com/278623931)), [RVM](http://rvm.io/) ([maintainer interview with Michal Papis](https://vimeo.com/279013852)), [Homebrew](https://brew.sh/) ([maintainer interview with Alyssa Ross](https://vimeo.com/276832570)), [Support Central](https://github.com/phusion/support_central/) ([interview with Hongli Lai](https://vimeo.com/276832741)), [Foreman](https://theforeman.org/) ([interview with Tomer Brisker](https://vimeo.com/276832413)], and the [WeTransfer API](https://wetransfer.github.io/] (interview with [Noah Berman](https://vimeo.com/280321413)). Team members: [Rayta van Rijswijk](https://twitter.com/raytalks), [Lieke Boon](https://twitter.com/Lieke2208), and [Sebastian Gräßl](https://twitter.com/bastilian).

> ROSS conf was brilliant. 28 PRs from 9 different people, several bug fixes, lots of great improvements to documentation, refactoring, fixes to configuration and the setup process and a commit that made the Travis build MUCH faster.
>
> Katrina Owen (Exercism.io)

> OSS conf was amazing, an exceptional arrangement of people interested in open source. Most of rvm.io code got rewritten from Haml to Markdown. A rewrite that made rvm.io accessible. An implementation of dynamic options for Thor for RVM2 as well as an actually prototype for RVM2 was created, ARM / Raspberry PI fixes for RVM1 were implemented and a long standing issue with automatically enabling login shell in the gnome terminal got fixed.
>
> Michal Papis (RVM)

> Eleven PRs and eight issues. Mind. Blown. A refactoring that let us remove the last ABC complexity offence in RuboCop, turning the Attribute smell much more useful for real-world scenarios, a lot of quality clean-up and debugging, making Reek a better command-line citizen, documentation examples and an Ataru integration, a nicer output nicer and a less... smelly codebase and faster Travis notifications. I can’t overstate how wonderful ROSS conf was - putting this together in such a refreshing format was an awesome idea and the lightweight, all-needs-catered-to execution was super nice.
>
> Piotr Szotkowski (Reek)

> Since installing is the first step/ hurdle for diaspora*, that was also where most work got done. We published an updated wiki entry for setting up a dev environment on OSX Yosemite. Two people hacked on a Docker container and a Vagrant box for easier setup. Final count: 3 pull requests, two new non-trivial issues were opened and a lot of people created accounts. The whole weekend was a blast and the people and the conference were just amazing!
>
> Lisa Passing (Diaspora)

> Two people worked on a yaks-rails integration gem, one on continued testing and fixing the README with ataru, and the fourth implemented the shorthand attribute syntax. The Rails integration is working in a rough first version, the other tasks were completed and merged the day itself. I really like how ROSS conf provides an easy entry point for people to get involved in a project. Really looking forward to seeing more ROSS confs in the future!
>
> Arne Brasseur (Yaks)

> We had a strong team with contributors from a variety of backgrounds all working on something. We received 3 patches in total, 1 bug fix, 1 doc patch, and 1 feature. With one more doc patch coming soon. I couldn't be happier!
>
> Zachary Scott (Ruby)

> ROSS conf exceeded my expectations. Maintainers and attendees alike got an in-depth look at very useful projects in the Ruby community, as well as an inside look into Ruby itself -- not just in terms of code, but how also Open Source projects are managed. The projects I maintain received a half-dozen PRs, as well as very important planning and design time with other like-minded engineers.
>
> Laura Frank (Panamax)

> 2 issues added, 3 merged pull request and one pending - one of them converting all cucumber tests in rspec tests, which saves us a load of work. I left with a lot of energy and renewed motivation.
>
> Tyranja (Speakerinnen)
`
        } />
      </row>
    </div>
  </>
  )
}

export default About
