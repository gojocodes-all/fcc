
const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  let result = [];

  for (let i = 0; i < playlists.length; i++) {
    for (let j = 0; j < playlists[i].length; j++) {
      result.push({
        ...playlists[i][j],
        source: [i, j]
      });
    }
  }

  return result;
}


function scoreTracks(tracks) {
  let result = [];

  for (let i = 0; i < tracks.length; i++) {
    let track = tracks[i];

    result.push({
      ...track,
      score: track.votes * 10 - Math.abs(track.bpm - 120)
    });
  }

  return result;
}


function dedupeTracks(tracks) {
  let result = [];
  let usedIds = [];

  for (let i = 0; i < tracks.length; i++) {
    let track = tracks[i];

    if (!usedIds.includes(track.trackId)) {
      usedIds.push(track.trackId);
      result.push(track);
    }
  }

  return result;
}


function enforceArtistQuota(tracks, maxPerArtist) {
  let result = [];
  let artists = {};

  for (let i = 0; i < tracks.length; i++) {
    let track = tracks[i];

    if (artists[track.artist] === undefined) {
      artists[track.artist] = 0;
    }

    if (artists[track.artist] < maxPerArtist) {
      result.push(track);
      artists[track.artist]++;
    }
  }

  return result;
}


function buildSchedule(tracks) {
  let result = [];

  for (let i = 0; i < tracks.length; i++) {
    result.push({
      slot: i + 1,
      trackId: tracks[i].trackId
    });
  }

  return result;
}


function remixPlaylist(playlists, maxPerArtist) {
  let flattened = flattenPlaylists(playlists);
  let scored = scoreTracks(flattened);
  let deduped = dedupeTracks(scored);
  let quotaApplied = enforceArtistQuota(deduped, maxPerArtist);
  let schedule = buildSchedule(quotaApplied);

  return schedule;
}
let vidk = new String("lala ia");
console.log(vidk);