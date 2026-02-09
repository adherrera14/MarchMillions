// 2026 NCAA Tournament Bracket Data
// Structured as 4 regions with seeds 1-16 per region
const TOURNAMENT_DATA = {
    regions: [
        {
            name: "East Region",
            color: "#1a5e1a",
            teams: [
                { id: 1, name: "Duke", seed: 1, stats: { kenpom: 1, wins: 28 } },
                { id: 2, name: "Purdue", seed: 16, stats: { kenpom: 87, wins: 15 } },
                { id: 3, name: "Kansas", seed: 8, stats: { kenpom: 12, wins: 24 } },
                { id: 4, name: "Nebraska", seed: 9, stats: { kenpom: 45, wins: 19 } },
                { id: 5, name: "Marquette", seed: 5, stats: { kenpom: 18, wins: 26 } },
                { id: 6, name: "Mississippi St", seed: 12, stats: { kenpom: 52, wins: 20 } },
                { id: 7, name: "Wisconsin", seed: 4, stats: { kenpom: 8, wins: 27 } },
                { id: 8, name: "Wagner", seed: 13, stats: { kenpom: 135, wins: 17 } },
                { id: 9, name: "Iowa State", seed: 6, stats: { kenpom: 24, wins: 25 } },
                { id: 10, name: "Texas Tech", seed: 11, stats: { kenpom: 48, wins: 21 } },
                { id: 11, name: "Auburn", seed: 3, stats: { kenpom: 5, wins: 28 } },
                { id: 12, name: "Baylor", seed: 14, stats: { kenpom: 78, wins: 18 } },
                { id: 13, name: "Miami", seed: 7, stats: { kenpom: 32, wins: 23 } },
                { id: 14, name: "Mississippi", seed: 10, stats: { kenpom: 56, wins: 20 } },
                { id: 15, name: "Creighton", seed: 2, stats: { kenpom: 3, wins: 29 } },
                { id: 16, name: "Johns Hopkins", seed: 15, stats: { kenpom: 112, wins: 16 } },
            ]
        },
        {
            name: "West Region",
            color: "#2d8f2d",
            teams: [
                { id: 17, name: "Utah State", seed: 1, stats: { kenpom: 2, wins: 29 } },
                { id: 18, name: "Vermont", seed: 16, stats: { kenpom: 89, wins: 14 } },
                { id: 19, name: "Oregon", seed: 8, stats: { kenpom: 14, wins: 23 } },
                { id: 20, name: "Drexel", seed: 9, stats: { kenpom: 51, wins: 19 } },
                { id: 21, name: "Texas", seed: 5, stats: { kenpom: 19, wins: 25 } },
                { id: 22, name: "San Diego St", seed: 12, stats: { kenpom: 53, wins: 20 } },
                { id: 23, name: "Gonzaga", seed: 4, stats: { kenpom: 7, wins: 27 } },
                { id: 24, name: "Savannah St", seed: 13, stats: { kenpom: 142, wins: 16 } },
                { id: 25, name: "Arkansas", seed: 6, stats: { kenpom: 26, wins: 24 } },
                { id: 26, name: "St Mary's", seed: 11, stats: { kenpom: 54, wins: 21 } },
                { id: 27, name: "Houston", seed: 3, stats: { kenpom: 6, wins: 28 } },
                { id: 28, name: "USC", seed: 14, stats: { kenpom: 82, wins: 18 } },
                { id: 29, name: "Colorado St", seed: 7, stats: { kenpom: 31, wins: 24 } },
                { id: 30, name: "Memphis", seed: 10, stats: { kenpom: 58, wins: 20 } },
                { id: 31, name: "Baylor", seed: 2, stats: { kenpom: 4, wins: 28 } },
                { id: 32, name: "Northern Carolina A&T", seed: 15, stats: { kenpom: 115, wins: 15 } },
            ]
        },
        {
            name: "Midwest Region",
            color: "#1a5e1a",
            teams: [
                { id: 33, name: "Northwestern", seed: 1, stats: { kenpom: 9, wins: 27 } },
                { id: 34, name: "UIC", seed: 16, stats: { kenpom: 91, wins: 14 } },
                { id: 35, name: "Kentucky", seed: 8, stats: { kenpom: 16, wins: 23 } },
                { id: 36, name: "Colgate", seed: 9, stats: { kenpom: 62, wins: 18 } },
                { id: 37, name: "Dayton", seed: 5, stats: { kenpom: 21, wins: 25 } },
                { id: 38, name: "College of Charleston", seed: 12, stats: { kenpom: 59, wins: 20 } },
                { id: 39, name: "UCLA", seed: 4, stats: { kenpom: 11, wins: 26 } },
                { id: 40, name: "Furman", seed: 13, stats: { kenpom: 140, wins: 16 } },
                { id: 41, name: "Penn State", seed: 6, stats: { kenpom: 28, wins: 23 } },
                { id: 42, name: "Grambling", seed: 11, stats: { kenpom: 68, wins: 22 } },
                { id: 43, name: "Connecticut", seed: 3, stats: { kenpom: 10, wins: 27 } },
                { id: 44, name: "Valparaiso", seed: 14, stats: { kenpom: 85, wins: 18 } },
                { id: 45, name: "North Carolina State", seed: 7, stats: { kenpom: 34, wins: 23 } },
                { id: 46, name: "Richmond", seed: 10, stats: { kenpom: 61, wins: 20 } },
                { id: 47, name: "Virginia Tech", seed: 2, stats: { kenpom: 13, wins: 26 } },
                { id: 48, name: "Morgan State", seed: 15, stats: { kenpom: 118, wins: 14 } },
            ]
        },
        {
            name: "South Region",
            color: "#2d8f2d",
            teams: [
                { id: 49, name: "Duke", seed: 1, stats: { kenpom: 17, wins: 25 } },
                { id: 50, name: "North Florida", seed: 16, stats: { kenpom: 93, wins: 13 } },
                { id: 51, name: "Michigan State", seed: 8, stats: { kenpom: 22, wins: 23 } },
                { id: 52, name: "Wichita State", seed: 9, stats: { kenpom: 63, wins: 18 } },
                { id: 53, name: "Tennessee", seed: 5, stats: { kenpom: 20, wins: 26 } },
                { id: 54, name: "New Mexico State", seed: 12, stats: { kenpom: 65, wins: 19 } },
                { id: 55, name: "Michigan", seed: 4, stats: { kenpom: 15, wins: 25 } },
                { id: 56, name: "Kennesaw State", seed: 13, stats: { kenpom: 138, wins: 17 } },
                { id: 57, name: "Oklahoma", seed: 6, stats: { kenpom: 29, wins: 23 } },
                { id: 58, name: "BYU", seed: 11, stats: { kenpom: 55, wins: 21 } },
                { id: 59, name: "Louisville", seed: 3, stats: { kenpom: 23, wins: 26 } },
                { id: 60, name: "Delaware", seed: 14, stats: { kenpom: 88, wins: 17 } },
                { id: 61, name: "Florida", seed: 7, stats: { kenpom: 33, wins: 23 } },
                { id: 62, name: "Marquette", seed: 10, stats: { kenpom: 60, wins: 20 } },
                { id: 63, name: "Arizona", seed: 2, stats: { kenpom: 25, wins: 24 } },
                { id: 64, name: "Hampton", seed: 15, stats: { kenpom: 120, wins: 15 } },
            ]
        }
    ]
};

// Create a flat array of all teams for easier access
const ALL_TEAMS = [];
TOURNAMENT_DATA.regions.forEach(region => {
    ALL_TEAMS.push(...region.teams);
});

// Rankings storage
let rankings = {}; // Map of team ID to rank (1-64)
let selectedTeam = null;
let isModalOpen = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load rankings from localStorage if available
    loadRankings();
    
    // Initialize bracket display
    renderBracket();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initial update of the UI
    updateRankingsPanel();
    
    // Setup region tabs
    setupRegionTabs();
});

// Render the bracket display
function renderBracket() {
    const regionMap = {
        'East Region': 'regionEast',
        'West Region': 'regionWest',
        'Midwest Region': 'regionMidwest',
        'South Region': 'regionSouth'
    };

    TOURNAMENT_DATA.regions.forEach(region => {
        const regionElement = document.getElementById(regionMap[region.name]);
        regionElement.innerHTML = '';

        // Organize teams by seed (1-16)
        const teamsBySeed = {};
        (region.teams || []).forEach(team => {
            if (!teamsBySeed[team.seed]) {
                teamsBySeed[team.seed] = [];
            }
            teamsBySeed[team.seed].push(team);
        });

        // Display teams sorted by seed
        Object.keys(teamsBySeed)
            .map(Number)
            .sort((a, b) => a - b)
            .forEach(seed => {
                teamsBySeed[seed].forEach(team => {
                    const teamCard = createTeamCard(team);
                    regionElement.appendChild(teamCard);
                });
            });
    });
}

// Create a team card element
function createTeamCard(team) {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.id = `team-${team.id}`;
    card.dataset.teamId = team.id;

    let html = `<span class="team-name">${team.name}</span>`;

    const rankValue = rankings[team.id] || 0;
    html += `<span class="team-rank">${rankValue}</span>`;
    
    if (rankings[team.id]) {
        card.classList.add('ranked');
    }

    card.innerHTML = html;
    card._clickHandler = () => openRankingModal(team);
    card.addEventListener('click', card._clickHandler);
    
    // Add hover/touch event for team info
    card.addEventListener('mouseenter', () => showTeamInfo(team));
    card.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        showTeamInfo(team);
    });

    return card;
}

// Open ranking modal
function openRankingModal(team) {
    selectedTeam = team;
    isModalOpen = true;

    const modal = document.getElementById('rankingModal');
    const modalTeamName = document.getElementById('modalTeamName');
    modalTeamName.textContent = `${team.name} (${team.seed} seed)`;

    // Clear error message
    document.getElementById('rankingError').classList.remove('show');
    document.getElementById('rankingError').textContent = '';

    // Generate rank grid
    generateRankGrid(team.id);

    // Show modal
    modal.classList.add('show');
}

// Generate rank grid
function generateRankGrid(teamId) {
    const rankGrid = document.getElementById('rankGrid');
    rankGrid.innerHTML = '';
    const currentRank = rankings[teamId];

    for (let rank = 1; rank <= 64; rank++) {
        const rankOption = document.createElement('div');
        rankOption.className = 'rank-option';
        rankOption.textContent = rank;
        rankOption.dataset.rank = rank;

        // Check if rank is taken by another team
        const isTaken = Object.values(rankings).includes(rank) && rankings[teamId] !== rank;
        
        if (isTaken) {
            rankOption.classList.add('disabled');
        } else if (rank === currentRank) {
            rankOption.classList.add('selected');
        }

        if (!isTaken) {
            rankOption.addEventListener('click', () => selectRankOption(rank));
        }

        rankGrid.appendChild(rankOption);
    }

    // Setup quick input
    const rankQuickInput = document.getElementById('rankQuickInput');
    rankQuickInput.value = currentRank || '';
    rankQuickInput.addEventListener('input', (e) => handleQuickRankInput(e, teamId));
}

// Select rank from grid
function selectRankOption(rank) {
    const allOptions = document.querySelectorAll('.rank-option');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    
    const selectedOption = document.querySelector(`[data-rank="${rank}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }

    const rankQuickInput = document.getElementById('rankQuickInput');
    rankQuickInput.value = rank;
}

// Handle quick rank input
function handleQuickRankInput(event, teamId) {
    const rank = parseInt(event.target.value);
    const statusEl = document.getElementById('rankQuickStatus');

    if (event.target.value === '') {
        statusEl.textContent = '';
        document.querySelectorAll('.rank-option').forEach(opt => opt.classList.remove('selected'));
        return;
    }

    if (isNaN(rank) || rank < 1 || rank > 64) {
        statusEl.textContent = '❌ Invalid';
        statusEl.style.color = '#ff6b6b';
        return;
    }

    // Check if rank is taken
    if (Object.values(rankings).includes(rank) && rankings[teamId] !== rank) {
        statusEl.textContent = '❌ Taken';
        statusEl.style.color = '#ff6b6b';
        return;
    }

    statusEl.textContent = '✓ Available';
    statusEl.style.color = '#d4b962';
    selectRankOption(rank);
}

// Close modal
function closeRankingModal() {
    const modal = document.getElementById('rankingModal');
    modal.classList.remove('show');
    isModalOpen = false;
    selectedTeam = null;
}

// Confirm ranking
function confirmRank() {
    const rankQuickInput = document.getElementById('rankQuickInput');
    const rank = parseInt(rankQuickInput.value);
    const errorDiv = document.getElementById('rankingError');

    // Validation
    if (isNaN(rank) || rank < 1 || rank > 64) {
        errorDiv.textContent = 'Please select or enter a valid rank between 1 and 64.';
        errorDiv.classList.add('show');
        return;
    }

    // Check if rank is already taken
    if (Object.values(rankings).includes(rank) && rankings[selectedTeam.id] !== rank) {
        errorDiv.textContent = `Rank ${rank} is already assigned to another team. Please choose a different rank.`;
        errorDiv.classList.add('show');
        return;
    }

    // Assign rank
    rankings[selectedTeam.id] = rank;
    saveRankings();
    updateTeamCard(selectedTeam.id);
    updateRankingsPanel();
    closeRankingModal();
}

// Remove rank
function removeRank() {
    if (selectedTeam && rankings[selectedTeam.id]) {
        delete rankings[selectedTeam.id];
        saveRankings();
        updateTeamCard(selectedTeam.id);
        updateRankingsPanel();
        closeRankingModal();
    }
}

// Update team card after ranking
function updateTeamCard(teamId) {
    const card = document.getElementById(`team-${teamId}`);
    if (!card) return;

    const team = ALL_TEAMS.find(t => t.id === teamId);

    let html = `<span class="team-name">${team.name}</span>`;
    const rankValue = rankings[teamId] || 0;
    html += `<span class="team-rank">${rankValue}</span>`;
    
    if (rankings[teamId]) {
        card.classList.add('ranked');
    } else {
        card.classList.remove('ranked');
    }
    
    card.innerHTML = html;
    
    // Re-attach click listener after innerHTML update
    card.removeEventListener('click', card._clickHandler);
    card._clickHandler = () => openRankingModal(team);
    card.addEventListener('click', card._clickHandler);
    
    // Re-attach hover/touch listeners
    card.addEventListener('mouseenter', () => showTeamInfo(team));
    card.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        showTeamInfo(team);
    });
}

// Show team information in sidebar
function showTeamInfo(team) {
    const teamInfoDiv = document.getElementById('teamInfo');
    const rank = rankings[team.id];
    const initials = getTeamInitials(team.name);
    
    let html = `
        <div class="team-detail">
            <div class="team-info-header">
                <div class="team-logo" aria-hidden="true">
                    <span class="team-logo-text">${initials}</span>
                </div>
                <div class="team-info-name">
                    <strong>${team.name}</strong>
                    <p>Seed: <strong>${team.seed}</strong></p>
                    <p>Record: <strong>${team.stats.wins} wins</strong></p>
                </div>
            </div>
        </div>
    `;

    if (rank) {
        html += `<div class="team-detail" style="background-color: rgba(212, 185, 98, 0.1); padding: 1rem; border-radius: 4px; margin-top: 0.5rem;">
            <p>Current Rank: <strong style="color: #d4b962; font-size: 1.2em;">${rank}/64</strong></p>
        </div>`;
    } else {
        html += `<div class="team-detail" style="background-color: rgba(68, 68, 68, 0.3); padding: 1rem; border-radius: 4px; margin-top: 0.5rem;">
            <p style="color: #999;">Not ranked yet</p>
        </div>`;
    }

    teamInfoDiv.innerHTML = html;
}

function getTeamInitials(name) {
    const words = name.replace(/[^A-Za-z0-9 ]/g, '').trim().split(/\s+/);
    if (words.length === 1) {
        return words[0].slice(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
}

// Update rankings panel
function updateRankingsPanel() {
    const rankedCount = document.getElementById('rankedCount');
    const progressFill = document.getElementById('progressFill');
    const topRankings = document.getElementById('topRankings');
    const submitButton = document.getElementById('exportBracket');
    const submitNote = document.getElementById('submitNote');

    // Update count
    const count = Object.keys(rankings).length;
    rankedCount.textContent = count;
    progressFill.style.width = (count / 64) * 100 + '%';

    const allRanked = count === 64;
    if (submitButton) {
        submitButton.disabled = !allRanked;
        submitButton.setAttribute('aria-disabled', String(!allRanked));
    }
    if (submitNote) {
        submitNote.textContent = allRanked
            ? 'All teams ranked. You can submit your bracket.'
            : 'Rank all 64 teams to enable Submit.';
        submitNote.classList.toggle('is-ready', allRanked);
    }

    // Get top 10 ranked teams
    const topTeams = Object.entries(rankings)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([teamId, rank]) => {
            const team = ALL_TEAMS.find(t => t.id === parseInt(teamId));
            return { teamId: parseInt(teamId), rank, team };
        });

    // Update top rankings display
    if (topTeams.length === 0) {
        topRankings.innerHTML = '<li class="empty-state">No teams ranked yet</li>';
    } else {
        topRankings.innerHTML = topTeams.map(item => 
            `<li><span class="ranking-item-name">${item.rank}. ${item.team.name}</span></li>`
        ).join('');
    }

    // Display team info if a team is selected
    updateTeamInfo();
}

// Update team info panel
function updateTeamInfo() {
    const teamInfoDiv = document.getElementById('teamInfo');

    if (!selectedTeam) {
        teamInfoDiv.innerHTML = '<p class="empty-state">Hover over a team to view details</p>';
        return;
    }

    showTeamInfo(selectedTeam);
}

// Setup event listeners
function setupEventListeners() {
    // Modal close button
    document.querySelector('.close').addEventListener('click', closeRankingModal);

    // Cancel button
    document.getElementById('cancelRank').addEventListener('click', closeRankingModal);

    // Confirm button
    document.getElementById('confirmRank').addEventListener('click', confirmRank);

    // Remove rank button
    document.getElementById('removeRank').addEventListener('click', removeRank);

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('rankingModal');
        if (event.target === modal) {
            closeRankingModal();
        }
    });

    // Clear all rankings
    document.getElementById('clearAll').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear all rankings? This cannot be undone.')) {
            rankings = {};
            saveRankings();
            renderBracket();
            updateRankingsPanel();
        }
    });

    // Export bracket
    document.getElementById('exportBracket').addEventListener('click', exportBracket);
}

// Export bracket as JSON
function exportBracket() {
    if (Object.keys(rankings).length !== 64) {
        alert('Please rank all 64 teams before submitting your bracket.');
        return;
    }

    const exportData = {
        timestamp: new Date().toISOString(),
        totalTeamsRanked: Object.keys(rankings).length,
        rankings: Object.entries(rankings)
            .sort((a, b) => b[1] - a[1])
            .map(([teamId, rank]) => {
                const team = ALL_TEAMS.find(t => t.id === parseInt(teamId));
                return {
                    rank,
                    teamName: team.name,
                    seed: team.seed
                };
            })
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `march-madness-bracket-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Save rankings to localStorage
function saveRankings() {
    localStorage.setItem('marchMadnessRankings', JSON.stringify(rankings));
}

// Load rankings from localStorage
function loadRankings() {
    const saved = localStorage.getItem('marchMadnessRankings');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Convert keys to integers
        Object.keys(parsed).forEach(key => {
            rankings[parseInt(key)] = parsed[key];
        });
    }
}

// Handle Enter key in ranking input
document.addEventListener('keypress', function(event) {
    if (isModalOpen && event.key === 'Enter') {
        confirmRank();
    }
});

// Setup region tabs
function setupRegionTabs() {
    const tabs = document.querySelectorAll('.region-tab');
    const regions = document.querySelectorAll('.region');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const regionName = tab.dataset.region;
            
            // Remove active class from all tabs and regions
            tabs.forEach(t => t.classList.remove('active'));
            regions.forEach(r => r.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding region
            tab.classList.add('active');
            const activeRegion = document.querySelector(`.region[data-region="${regionName}"]`);
            if (activeRegion) {
                activeRegion.classList.add('active');
            }
        });
    });
}
