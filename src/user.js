class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    // 游戏统计数据
    this.gameStats = {
      gamesPlayed: 0,
      gamesWon: 0,
      bestScore: null, // 最少猜测次数
      totalAttempts: 0,
      currentStreak: 0, // 连胜次数
      bestStreak: 0 // 最佳连胜次数
    };
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  // New method to check if the user is valid
  isValid() {
    return this.name && this.email && this.email.includes('@');
  }

  toString() {
    return `User: ${this.name} (${this.email})`;
  }

  /**
   * 记录游戏结果
   * @param {boolean} won - 是否获胜
   * @param {number} attempts - 尝试次数
   */
  recordGameResult(won, attempts) {
    this.gameStats.gamesPlayed++;
    this.gameStats.totalAttempts += attempts;

    if (won) {
      this.gameStats.gamesWon++;
      this.gameStats.currentStreak++;
      
      // 更新最佳成绩
      if (this.gameStats.bestScore === null || attempts < this.gameStats.bestScore) {
        this.gameStats.bestScore = attempts;
      }
      
      // 更新最佳连胜记录
      if (this.gameStats.currentStreak > this.gameStats.bestStreak) {
        this.gameStats.bestStreak = this.gameStats.currentStreak;
      }
    } else {
      this.gameStats.currentStreak = 0;
    }
  }

  /**
   * 获取游戏统计信息
   */
  getGameStats() {
    const winRate = this.gameStats.gamesPlayed > 0 
      ? ((this.gameStats.gamesWon / this.gameStats.gamesPlayed) * 100).toFixed(1)
      : 0;
    
    const avgAttempts = this.gameStats.gamesWon > 0
      ? (this.gameStats.totalAttempts / this.gameStats.gamesWon).toFixed(1)
      : 0;

    return {
      ...this.gameStats,
      winRate: `${winRate}%`,
      averageAttempts: avgAttempts
    };
  }

  /**
   * 重置游戏统计
   */
  resetGameStats() {
    this.gameStats = {
      gamesPlayed: 0,
      gamesWon: 0,
      bestScore: null,
      totalAttempts: 0,
      currentStreak: 0,
      bestStreak: 0
    };
  }

  /**
   * 获取玩家等级（基于获胜次数）
   */
  getPlayerLevel() {
    const wins = this.gameStats.gamesWon;
    if (wins < 5) return { level: '新手', emoji: '🌱' };
    if (wins < 15) return { level: '初级', emoji: '⭐' };
    if (wins < 30) return { level: '中级', emoji: '💫' };
    if (wins < 50) return { level: '高级', emoji: '🏆' };
    return { level: '大师', emoji: '👑' };
  }
}

module.exports = User;