export function Die({ value, isHeld, holdDice }) {

    const styles = {
        backgroundColor: isHeld ? "#59E391" : "#ffffff"
    }
    return (
        <div className="die" style={styles} onClick={holdDice}>
            <h2>{value}</h2>
        </div>
    );
}
