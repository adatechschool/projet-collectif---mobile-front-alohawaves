-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 19, 2022 at 08:42 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `alohawaves`
--
CREATE DATABASE IF NOT EXISTS `alohawaves` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `alohawaves`;

-- --------------------------------------------------------

--
-- Table structure for table `spot`
--

CREATE TABLE `spot` (
  `id` int(11) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `season` varchar(255) DEFAULT NULL,
  `beachstyle` varchar(255) DEFAULT NULL,
  `difficulty` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spot`
--

INSERT INTO `spot` (`id`, `destination`, `address`, `photo`, `season`, `beachstyle`, `difficulty`, `description`) VALUES
(1, 'Pipeline', 'Pipeline, Oahu, Hawaii', 'https://dl.airtable.com/ZuXJZ2NnTF40kCdBfTld_thomas-ashlock-64485-unsplash.jpg', '2018-07-22', 'Reef Break', 4, 'The Banzai Pipeline, or simply Pipeline or Pipe, is a surf reef break located in Hawaii, off Ehukai Beach Park in Pupukea on O\'ahu\'s North Shore. Pipeline is known for huge waves that break in shallow water just above a sharp and cavernous reef, forming large, hollow, thick curls of water that surfers can tube ride. '),
(2, 'Skeleton Bay', 'Skeleton Bay, Namibia', 'https://dl.airtable.com/YzqA020RRLaTyAZAta9g_brandon-compagne-308937-unsplash.jpg', '2018-09-01', 'Point Break', 5, 'The legendary Skeleton Bay surf spot is considered the longest sand-bottomed left hand wave in the world and only came into the surf world’s radar back in 2008, although a handful of South African surfers such as Grant ‘Twiggy’ Baker had reportedly made the journey a few year prior. '),
(3, 'Superbank', 'Superbank, Gold Coast, Australia', 'https://dl.airtable.com/I4E4xZeQbO2g814udQDm_jeremy-bishop-80371-unsplash.jpg', '2018-11-28', 'Point Break', 4, 'Superbank is an epic, part point break, part beach break wave at Tweed Heads, just north of the New South Wales / Queensland border in Australia. The wave was created following the start of the dredging of sand away from the Tweed Rivermouth, half a mile away south of Snapper.The wave now produces waves of staggering quality and long barrel rides are the norm. The standard of surfing here is excellent, and the number of surfers in the water can be mind blowing.'),
(4, 'Supertubes', 'Supertubes, Jeffreys Bay, South Africa', 'https://dl.airtable.com/e3QoP3cFSyykZJOvWGIy_cesar-couto-477018-unsplash%20(1).jpg', '2018-08-01', 'Point Break', 5, 'Supertubes (also known as Supers), is a popular surf break found on the south-west coast of Western Australia. It is located on Smiths Beach, which is near the town of Yallingup. Supertubes has hosted many local competitions over the years. Many professional bodyboarders and surfers have also been seen at this spot. The wave itself is about 50m out on a shallow reef. The left-hander, is a heavy barrel, that is only a very short ride, but is aesthetically pleasing. The right-hander though, is a long barrel that often closes out.'),
(5, 'Manu Bay', 'Manu Bay, Raglan, New Zealand', 'https://dl.airtable.com/jF7Y6RpGQueQok9TRQ9I_holger-link-707884-unsplash.jpg', '2018-12-01', 'Point Break', 2, 'Manu Bay is the first, and most popular, of the well-known Raglan point breaks. It is a long left-hand point break on a boulder beach. The wave reels across the whole bay, round past the boat ramp. The wave starts with a hollow drop in, into a barrel section, then works into a long wally section. It is hollower and faster on the lower tide. Jump off the rocks at the point, western end of the bay, to join the line-up. Be careful on the rocks.'),
(6, 'Kitty Hawk', 'Kitty Hawk, Outer Banks, North Carolina', 'https://dl.airtable.com/c9xSCxlS8a6YITIYnQjE_jens-theess-511-unsplash.jpg', '2018-08-09', 'Outer Banks', 3, 'Located in front of the Hilton in Kitty Hawk, this is a great spot when staying at the Northern beaches. When the wind direction is right, this spot produces some nice barrels without the long drive down south. Kitty Hawk is also home to ESA Surfing Competitions throughout the year. They welcome all age groups to compete for a spot in the Masters.'),
(7, 'Pasta Point', 'Pasta Point, Maldives', 'https://dl.airtable.com/o4SxpoNxTSC49F4P2Hlc_aleksandar-popovski-693255-unsplash.jpg', '2018-04-01', 'Reef Break', 3, 'Perhaps the most famous wave in the Maldives, this is where Tony Hussein-Hinde set up Atoll Adventures in the early \'90s. Its name comes from the fact that the island used to be an Italian resort -- and after surfing the perfect lefts all day your arms will most certainly be noodled. Pasta Point is indeed probably the best left out here, as it picks up the most swell, is the least affected by wind, and offers a 100-yard-long tubing wall for your pulling-in enjoyment. The fast takeoff section leads straight into the so-called \"Macaroni Bowl\" tube section and then mellows for a couple top turns before the inside shallow racetrack, called Lockjaws.'),
(8, 'Playa Chicama', 'Playa Chicama, Lima, Peru', 'https://dl.airtable.com/RSvwOQwSSmiGy7VItdbI_troy-williams-532798-unsplash%202.jpg', '2018-05-01', 'Point Break', 3, 'At one time called the world\'s longest wave, one look at a map of Chicama reveals the hugeness and flawless symmetry of this lefthand sand point, and the wave can go on for more than two miles. Chicama has several sections, so paddling back out to the takeoff area at the top is useless -- simply surf your way down the point and then walk back. It\'s not a heavy wave by any means, so surfers of all ability levels can revel in the perfection.'),
(9, 'Rockaway Beach', 'Rockaway Beach, Queens, New York', 'https://dl.airtable.com/1XBOoGyLT6q15mBTv8CV_dmytro-barylo-152817-unsplash.jpg', '2018-08-23', 'Beach Break', 1, 'Being the closest consistently surfable spot to New York City, Rockaway is the most popular day trip for city surfers. The beach is easily accessible by the city train system. The west-end towns of Breezy Point and Bell Harbor are nice areas with excellent surf. The Ramones hitched a ride to 92nd Street in the \'70s, and it remains the most popular spot in Rockaway. A long jetty creates a hollow takeoff, followed by fast, grinding lefts walls. Once the poster child for polluted lineups, legislation over the last couple decades has cleaned things up dramatically. But it\'s still New York, so, for heaven\'s sake, be careful.'),
(10, 'The Bubble', 'The Bubble, Fuerteventura, Canary Islands', 'https://dl.airtable.com/TTgWI4QrOgKO2uLAEsMg_josh-withers-636290-unsplash.jpg', '2018-06-01', 'Reef Break', 3, 'A powerful pointbreak in front of Majanicho, a short drive west from Corralejo on Fuerteventura. The reef can produce good tubes with a strong swell. Bubbles is a short wave, but powerful, hollow and fast. Only for experienced surfers!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `spot`
--
ALTER TABLE `spot`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `spot`
--
ALTER TABLE `spot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;