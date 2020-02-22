export class VerseNotes {}

export class Note {
  public id: string;
  public phr: string;
  public overlay: number;
  public refs: NoteReference[];

  public off: string;
  public uOff: number[];
}

export class NoteReference {
  public cat: number;
  public txt: string;
}
